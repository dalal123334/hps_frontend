import {Routes} from '@angular/router';
import {PlaceholderComponent} from "./placeholder/placeholder.component";
import {HomeComponent} from "./home/home.component";
import {NewTransactionComponent} from "./new-transaction/new-transaction.component";
import {TransactionReportComponent} from "./transaction-report/transaction-report.component"; // Utiliser un composant temporaire


export const routes: Routes = [
  {path: 'new-transaction', component: NewTransactionComponent},
  {path: 'transaction-report', component: TransactionReportComponent},
  {path: 'home', component: HomeComponent},
  {path: 'new-page', component: PlaceholderComponent}, // Route temporaire
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
