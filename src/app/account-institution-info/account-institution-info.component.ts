import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {AccountInstitutionInfo} from "../entities/AccountInstitutionInfo";
import {CurrencyConversionInfo} from "../entities/CurrencyConversionInfo";
import {BackendService} from "../service/forms-back/backend.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-account-institution-info',
  templateUrl: './account-institution-info.component.html',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./account-institution-info.component.css'],
  providers: [BackendService, HttpClientModule]
})
export class AccountInstitutionInfoComponent implements OnInit {
  accountInstitutionForm!: FormGroup;
  currencyConversionForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.accountInstitutionForm = this.fb.group({
      acquiringInstitutionIdCode: ['', Validators.required],
      forwardingInstitutionIdCode: ['', Validators.required]
    });

    this.currencyConversionForm = this.fb.group({
      conversionRateReconciliation: ['', Validators.required],
      conversionRateCardholderBilling: ['', Validators.required],
      currencyConversionDate: ['', Validators.required],
      currencyConversionIndicator: ['', Validators.required],
      amountCardholderBillingUSD: ['', Validators.required],
      amountCurrencyConversionAssessmentUSD: ['', Validators.required],
    });
  }

  submit() {
    if (this.accountInstitutionForm.valid && this.currencyConversionForm.valid) {
      let accountInstitutionInfo: AccountInstitutionInfo = this.accountInstitutionForm.value;
      let currencyConversionInfo: CurrencyConversionInfo = this.currencyConversionForm.value;
      this.backendService.createAccountInstitutionInfo(accountInstitutionInfo).subscribe(data1 => {
        this.backendService.createCurrencyConversionInfo(currencyConversionInfo).subscribe(data2 => {
          if (data1 != null && data2 != null) {
            this.router.navigate(['/transaction-info']).then(r => console.log('Navigation successful'));
          }
        })
      });
    } else{
      alert('Please fill in all the fields');
    }
  }
}
