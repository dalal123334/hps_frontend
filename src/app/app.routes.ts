import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

import {TransactionReportComponent} from "./transaction-report/transaction-report.component";
import {MultiStepFormComponent} from "./multi-step-form/multi-step-form.component";
import { AccountInstitutionInfoComponent } from './account-institution-info/account-institution-info.component';
import {TransactionInfoComponent} from "./transaction-info/transaction-info.component";
import {AdditionalDataComponent} from "./additional-data/additional-data.component";
import {FileDisplayComponent} from "./file-display/file-display.component";


export const routes: Routes = [
  {path: 'additional-data', component: AdditionalDataComponent },
  {path: 'transaction-info', component: TransactionInfoComponent },
  {path: 'account-institution-info', component: AccountInstitutionInfoComponent },
  {path: 'transaction-report', component: TransactionReportComponent},
  {path: 'multi-step-form', component: MultiStepFormComponent },
  {path: 'home', component: HomeComponent},
  {path:"files", component:FileDisplayComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
