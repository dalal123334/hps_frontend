import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {BackendService} from "../service/backend.service";
import {AcceptorInfo} from "../entities/AcceptorInfo";
import {HttpClientModule} from "@angular/common/http";
import {ReconciliationInfo} from "../entities/ReconciliationInfo";

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  standalone: true,
  styleUrls: ['./multi-step-form.component.css'],
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    HttpClientModule,
  ],
  providers: [BackendService, HttpClientModule]
})
export class MultiStepFormComponent implements OnInit {
  transactionForm1!: FormGroup;
  transactionForm2!: FormGroup;
  cities: string[] = ['New York', 'Los Angeles', 'Chicago'];

  constructor(private fb: FormBuilder, private router: Router, private backendService: BackendService) {
  }

  ngOnInit() {
    this.transactionForm1 = this.fb.group({
      acceptorBusinessCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      acceptorTerminalId: ['', Validators.required],
      acceptorIdCode: ['', [Validators.required, Validators.minLength(6)]],
      acceptorNameLocation: ['', Validators.required],
      acceptorStreetAddress: ['', Validators.required],
      acceptorCity: ['', Validators.required],
    });

    this.transactionForm2 = this.fb.group({
      amountReconciliation: ['', Validators.required],
      currencyCodeReconciliation: ['', Validators.required],
      amountsAdditional: ['', Validators.required],
      settlementInformation: ['', Validators.required],
    });
  }

  submit() {
    if (this.transactionForm1.valid && this.transactionForm2.valid) {
      let acceptorInfo: AcceptorInfo = this.transactionForm1.value;
      let reconciliationInfo = this.transactionForm2.value;
      console.log(acceptorInfo)
      console.log(reconciliationInfo)
      this.backendService.createAcceptorInfo(acceptorInfo).subscribe((data1: AcceptorInfo) => {
        this.backendService.createReconciliationInfo(reconciliationInfo).subscribe((data2: ReconciliationInfo) => {
          if (data1 && data2) {
            this.router.navigate(['/account-institution-info']).then(r => console.log(r));
          } else {
            alert("error")
          }
        });
      });
    } else {
      alert("missing fields")
    }

  }
}
