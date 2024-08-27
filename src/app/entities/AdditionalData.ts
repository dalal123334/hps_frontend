import {Validators} from "@angular/forms";

export interface AdditionalData{
  id:number,
  mastercardMappingServiceAccountNumber: string,
  gcmsProductIdentifier: string,
  licensedProductIdentifier: string,
  fundingAccountInformation: string,
  messageErrorIndicator: string,
  digitalAccountReferenceNumber: string,
  clearingCurrencyConversionIdentifier: string,
  transactionIntegrityClass: string,
  acceptanceData: string,
  digitalCommerceSolutionsIndicators: string,
  transactionTypeIndicator: string,
  additionalTerminalOperatingEnvironments: string,
  terminalType: string,
  messageReversalIndicator: string,
  flexCode: string,
  mpqrReceivingAccountNumber: string,
  programAccountType: string,
}
