import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseUrl = 'http://localhost:8081 serve /api';
  private http: any;

  createTransaction(transaction: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/transactions`, transaction);
  }

  // Exemple de méthode pour envoyer une requête GET
  getTransactions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/transactions`);
  }
}
