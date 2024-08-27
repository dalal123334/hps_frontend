export interface CurrencyConversionInfo {
  id:number,
  conversionRateReconciliation: number,
  conversionRateCardholderBilling: bigint,
  currencyConversionDate: Date,
  currencyConversionIndicator: string,
  amountCardholderBillingUSD: bigint,
  amountCurrencyConversionAssessmentUSD: bigint
}
