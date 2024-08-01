import { Routes } from '@angular/router';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { PlaceholderComponent } from "./placeholder/placeholder.component"; // Utiliser un composant temporaire
export const routes: Routes = [
  { path: 'new-transaction', component: NewTransactionComponent },
  { path: 'transaction-report', component: TransactionReportComponent },
  { path: 'new-page', component: PlaceholderComponent }, // Route temporaire
  { path: '', redirectTo: '/new-transaction', pathMatch: 'full' }
];
