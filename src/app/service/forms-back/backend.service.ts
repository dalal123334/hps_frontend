import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AcceptorInfo} from "../../entities/AcceptorInfo";
import {ReconciliationInfo} from "../../entities/ReconciliationInfo";
import {AccountInstitutionInfo} from "../../entities/AccountInstitutionInfo";
import {CurrencyConversionInfo} from "../../entities/CurrencyConversionInfo";
import {TransactionInfo} from "../../entities/TransactionInfo";
import {AdditionalData} from "../../entities/AdditionalData";

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseUrl = 'http://localhost:8081/api';


  constructor(private httpClient: HttpClient) {
  }

  createTransaction(transaction: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/transactions`, transaction);
  }

  // Exemple de méthode pour envoyer une requête GET
  getTransactions(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/transactions`);
  }

  createAcceptorInfo(acceptorInfo: AcceptorInfo): Observable<AcceptorInfo> {
    return this.httpClient.post<AcceptorInfo>(`${this.baseUrl}/transactions/base-info`, acceptorInfo);
  }

  createReconciliationInfo(reconciliationInfo: ReconciliationInfo): Observable<ReconciliationInfo> {
    return this.httpClient.post<ReconciliationInfo>(`${this.baseUrl}/reconciliation-info`, reconciliationInfo);
  }

  createAccountInstitutionInfo(accountInstitutionInfo: AccountInstitutionInfo): Observable<AccountInstitutionInfo> {
    return this.httpClient.post<AccountInstitutionInfo>(`${this.baseUrl}/account-institution-info`, accountInstitutionInfo);
  }

  createCurrencyConversionInfo(currencyConversionInfo: CurrencyConversionInfo): Observable<CurrencyConversionInfo> {
    return this.httpClient.post<CurrencyConversionInfo>(`${this.baseUrl}/transactions/merchant-info`, currencyConversionInfo);
  }

  createTransactionInfo(transactionInfo: TransactionInfo): Observable<TransactionInfo> {
    return this.httpClient.post<TransactionInfo>(`${this.baseUrl}/transaction-info`, transactionInfo);
  }


  createAdditionalData(additionalData: AdditionalData): Observable<AdditionalData> {
    return this.httpClient.post<AdditionalData>(`${this.baseUrl}/additional-data`, additionalData);
  }


}
