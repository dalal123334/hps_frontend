import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import {routes} from "./app.routes";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container">
      <div class="orange-container" [routerLink]="['/new-transaction']">
        <!-- Contenu existant du premier conteneur orange -->
        New Transaction
      </div>
      <div class="orange-container" [routerLink]="['/transaction-report']">
        <!-- Contenu existant du deuxième conteneur orange -->
        Transaction Report
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: space-around;
    }
    .orange-container {
      background-color: orange;
      padding: 20px;
      cursor: pointer;
    }
  `]
})
export class AppComponent {
  title = 'frontPrj';
}
