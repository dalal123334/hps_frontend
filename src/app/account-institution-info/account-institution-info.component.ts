import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-institution-info',
  templateUrl: './account-institution-info.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./account-institution-info.component.css']
})
export class AccountInstitutionInfoComponent implements OnInit {
  accountInstitutionForm!: FormGroup;
  currencyConversionForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

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

  testClick() {
    console.log('Button clicked');
    this.router.navigate(['/transaction-info']);
  }
}
