import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-additional-data',
  templateUrl: './additional-data.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./additional-data.component.css']
})
export class AdditionalDataComponent implements OnInit {
  additionalDataForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.additionalDataForm = this.fb.group({
      mastercardMappingServiceAccountNumber: ['', Validators.required],
      gcmsProductIdentifier: ['', Validators.required],
      licensedProductIdentifier: ['', Validators.required],
      fundingAccountInformation: ['', Validators.required],
      messageErrorIndicator: ['', Validators.required],
      digitalAccountReferenceNumber: ['', Validators.required],
      clearingCurrencyConversionIdentifier: ['', Validators.required],
      transactionIntegrityClass: ['', Validators.required],
      acceptanceData: ['', Validators.required],
      digitalCommerceSolutionsIndicators: ['', Validators.required],
      transactionTypeIndicator: ['', Validators.required],
      additionalTerminalOperatingEnvironments: ['', Validators.required],
      terminalType: ['', Validators.required],
      messageReversalIndicator: ['', Validators.required],
      flexCode: ['', Validators.required],
      mpqrReceivingAccountNumber: ['', Validators.required],
      programAccountType: ['', Validators.required],  // Ensure this matches the formControlName in the HTML
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.additionalDataForm.valid) {
      console.log('Form Submitted', this.additionalDataForm.value);
    }
  }
}
