#!/usr/bin/env node

const [metric, raw] = process.argv.slice(2);

if (!metric || !raw) {
  console.error('Usage: node scripts/metric-calculator.mjs <metric> \'{"key":value}\'');
  process.exit(1);
}

let x;
try { x = JSON.parse(raw); } catch {
  console.error('Input must be valid JSON.');
  process.exit(1);
}

const finite = (v, name) => {
  if (typeof v !== 'number' || !Number.isFinite(v)) throw new Error(`${name} must be a finite number`);
  return v;
};
const nonzero = (v, name) => {
  finite(v,name);
  if (v === 0) throw new Error(`${name} must not be zero`);
  return v;
};
const pct = v => v * 100;

const calculators = {
  roi: ({returnValue, investmentCost}) => ({
    netReturn: finite(returnValue,'returnValue') - finite(investmentCost,'investmentCost'),
    roiPct: pct((returnValue - investmentCost) / nonzero(investmentCost,'investmentCost'))
  }),
  cac: ({acquisitionCost, newCustomers}) => ({
    cac: finite(acquisitionCost,'acquisitionCost') / nonzero(newCustomers,'newCustomers')
  }),
  aov: ({revenue, orders}) => ({ aov: finite(revenue,'revenue') / nonzero(orders,'orders') }),
  burnRate: ({cashOutflows, cashInflows}) => ({
    grossBurn: finite(cashOutflows,'cashOutflows'),
    netBurn: cashOutflows - finite(cashInflows,'cashInflows')
  }),
  runway: ({cash, netBurn}) => {
    finite(cash,'cash'); finite(netBurn,'netBurn');
    if (netBurn <= 0) return { runwayMonths: null, note: 'No positive net burn; finite runway is not applicable.' };
    return { runwayMonths: cash / netBurn };
  },
  churn: ({lostCustomers, startingCustomers}) => ({
    churnPct: pct(finite(lostCustomers,'lostCustomers') / nonzero(startingCustomers,'startingCustomers'))
  }),
  retentionRate: ({lostCustomers, startingCustomers}) => ({
    retentionPct: pct((nonzero(startingCustomers,'startingCustomers') - finite(lostCustomers,'lostCustomers')) / startingCustomers)
  }),
  mrrMovement: ({beginningMrr,newMrr=0,expansionMrr=0,contractionMrr=0,churnedMrr=0}) => ({
    endingMrr: finite(beginningMrr,'beginningMrr') + finite(newMrr,'newMrr') + finite(expansionMrr,'expansionMrr') - finite(contractionMrr,'contractionMrr') - finite(churnedMrr,'churnedMrr')
  }),
  arr: ({mrr}) => ({ arr: finite(mrr,'mrr') * 12 }),
  nrr: ({beginningMrr,expansionMrr=0,contractionMrr=0,churnedMrr=0}) => ({
    nrrPct: pct((nonzero(beginningMrr,'beginningMrr') + finite(expansionMrr,'expansionMrr') - finite(contractionMrr,'contractionMrr') - finite(churnedMrr,'churnedMrr')) / beginningMrr)
  }),
  grr: ({beginningMrr,contractionMrr=0,churnedMrr=0}) => ({
    grrPct: pct((nonzero(beginningMrr,'beginningMrr') - finite(contractionMrr,'contractionMrr') - finite(churnedMrr,'churnedMrr')) / beginningMrr)
  }),
  arpu: ({revenue, activeUsers}) => ({ arpu: finite(revenue,'revenue') / nonzero(activeUsers,'activeUsers') }),
  ltvRecurring: ({arpu,grossMarginPct,churnPct}) => ({
    ltv: finite(arpu,'arpu') * (finite(grossMarginPct,'grossMarginPct')/100) / (nonzero(churnPct,'churnPct')/100)
  }),
  ltvCac: ({ltv,cac}) => ({ ratio: finite(ltv,'ltv') / nonzero(cac,'cac') }),
  cacPayback: ({cac,monthlyArpu,grossMarginPct}) => ({
    months: finite(cac,'cac') / (nonzero(monthlyArpu,'monthlyArpu') * (nonzero(grossMarginPct,'grossMarginPct')/100))
  }),
  grossMargin: ({revenue,cogs}) => {
    nonzero(revenue,'revenue'); finite(cogs,'cogs');
    const grossProfit = revenue - cogs;
    return { grossProfit, grossMarginPct: pct(grossProfit / revenue) };
  },
  contributionMargin: ({revenue,variableCosts}) => {
    nonzero(revenue,'revenue'); finite(variableCosts,'variableCosts');
    const contributionMargin = revenue - variableCosts;
    return { contributionMargin, contributionMarginPct: pct(contributionMargin/revenue) };
  },
  ebitda: ({netIncome,interest=0,incomeTaxes=0,depreciation=0,amortization=0,netRevenue}) => {
    const ebitda = finite(netIncome,'netIncome') + finite(interest,'interest') + finite(incomeTaxes,'incomeTaxes') + finite(depreciation,'depreciation') + finite(amortization,'amortization');
    const out = { ebitda };
    if (netRevenue !== undefined) out.ebitdaMarginPct = pct(ebitda / nonzero(netRevenue,'netRevenue'));
    return out;
  },
  quickRatio: ({newMrr=0,expansionMrr=0,contractionMrr=0,churnedMrr=0}) => {
    const gains = finite(newMrr,'newMrr') + finite(expansionMrr,'expansionMrr');
    const losses = finite(contractionMrr,'contractionMrr') + finite(churnedMrr,'churnedMrr');
    if (losses === 0) return { quickRatio: null, note: 'No recurring revenue losses in denominator.' };
    return { quickRatio: gains / losses };
  },
  magicNumber: ({currentQuarterRevenue,previousQuarterRevenue,previousQuarterSalesMarketing}) => ({
    magicNumber: ((finite(currentQuarterRevenue,'currentQuarterRevenue') - finite(previousQuarterRevenue,'previousQuarterRevenue')) * 4) / nonzero(previousQuarterSalesMarketing,'previousQuarterSalesMarketing')
  }),
  ruleOf40: ({growthPct,profitabilityMarginPct}) => ({
    ruleOf40: finite(growthPct,'growthPct') + finite(profitabilityMarginPct,'profitabilityMarginPct')
  }),
  revenueGrowth: ({currentRevenue,previousRevenue}) => ({
    absoluteGrowth: finite(currentRevenue,'currentRevenue') - finite(previousRevenue,'previousRevenue'),
    growthPct: pct((currentRevenue - previousRevenue) / nonzero(previousRevenue,'previousRevenue'))
  }),
  breakEvenRevenue: ({fixedCosts,contributionMarginPct}) => ({
    breakEvenRevenue: finite(fixedCosts,'fixedCosts') / (nonzero(contributionMarginPct,'contributionMarginPct')/100)
  }),
  breakEvenUnits: ({fixedCosts,pricePerUnit,variableCostPerUnit}) => ({
    breakEvenUnits: finite(fixedCosts,'fixedCosts') / nonzero(finite(pricePerUnit,'pricePerUnit') - finite(variableCostPerUnit,'variableCostPerUnit'),'contributionMarginPerUnit')
  }),
  customerConcentration: ({topNRevenue,totalRevenue}) => ({
    concentrationPct: pct(finite(topNRevenue,'topNRevenue') / nonzero(totalRevenue,'totalRevenue'))
  }),
  cashConversionCycle: ({dio,dso,dpo}) => ({
    days: finite(dio,'dio') + finite(dso,'dso') - finite(dpo,'dpo')
  }),
  ctr: ({clicks,impressions}) => ({
    ctrPct: pct(finite(clicks,'clicks') / nonzero(impressions,'impressions'))
  }),
  cpc: ({spend,clicks}) => ({
    cpc: finite(spend,'spend') / nonzero(clicks,'clicks')
  }),
  cpl: ({spend,leads}) => ({
    cpl: finite(spend,'spend') / nonzero(leads,'leads')
  }),
  cpql: ({spend,qualifiedLeads}) => ({
    cpql: finite(spend,'spend') / nonzero(qualifiedLeads,'qualifiedLeads')
  }),
  conversionRate: ({conversions,startingPopulation}) => ({
    conversionRatePct: pct(finite(conversions,'conversions') / nonzero(startingPopulation,'startingPopulation'))
  }),
  roas: ({revenue,spend}) => ({
    roas: finite(revenue,'revenue') / nonzero(spend,'spend')
  }),
  revenuePerLead: ({revenue,leads}) => ({
    revenuePerLead: finite(revenue,'revenue') / nonzero(leads,'leads')
  }),
  grossProfitPerLead: ({grossProfit,leads}) => ({
    grossProfitPerLead: finite(grossProfit,'grossProfit') / nonzero(leads,'leads')
  }),
  purchaseConversionRate: ({purchases,sessions}) => ({
    purchaseConversionRatePct: pct(finite(purchases,'purchases') / nonzero(sessions,'sessions'))
  }),
  addToCartRate: ({addToCart,productViews}) => ({
    addToCartRatePct: pct(finite(addToCart,'addToCart') / nonzero(productViews,'productViews'))
  }),
  checkoutConversion: ({purchases,checkoutStarts}) => ({
    checkoutConversionPct: pct(finite(purchases,'purchases') / nonzero(checkoutStarts,'checkoutStarts'))
  }),
  cartAbandonmentRate: ({starts,purchases}) => ({
    abandonmentRatePct: pct((nonzero(starts,'starts') - finite(purchases,'purchases')) / starts)
  }),
  revenuePerVisitor: ({revenue,visitors}) => ({
    revenuePerVisitor: finite(revenue,'revenue') / nonzero(visitors,'visitors')
  }),
  grossProfitPerVisitor: ({grossProfit,visitors}) => ({
    grossProfitPerVisitor: finite(grossProfit,'grossProfit') / nonzero(visitors,'visitors')
  }),
  grossProfitPerOrder: ({grossProfit,orders}) => ({
    grossProfitPerOrder: finite(grossProfit,'grossProfit') / nonzero(orders,'orders')
  }),
  repeatPurchaseRate: ({repeatCustomers,eligibleCustomers}) => ({
    repeatPurchaseRatePct: pct(finite(repeatCustomers,'repeatCustomers') / nonzero(eligibleCustomers,'eligibleCustomers'))
  }),
  purchaseFrequency: ({orders,customers}) => ({
    purchaseFrequency: finite(orders,'orders') / nonzero(customers,'customers')
  }),
  itemsPerOrder: ({unitsSold,orders}) => ({
    itemsPerOrder: finite(unitsSold,'unitsSold') / nonzero(orders,'orders')
  }),
  orderRefundRate: ({refundedOrders,orders}) => ({
    refundRatePct: pct(finite(refundedOrders,'refundedOrders') / nonzero(orders,'orders'))
  }),
  revenueRefundRate: ({refundedRevenue,revenue}) => ({
    refundRatePct: pct(finite(refundedRevenue,'refundedRevenue') / nonzero(revenue,'revenue'))
  }),
  returnRate: ({returns,salesBase}) => ({
    returnRatePct: pct(finite(returns,'returns') / nonzero(salesBase,'salesBase'))
  })
};

try {
  if (!calculators[metric]) throw new Error(`Unknown metric: ${metric}`);
  console.log(JSON.stringify(calculators[metric](x), null, 2));
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
