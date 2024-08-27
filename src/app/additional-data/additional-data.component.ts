import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {NgIf} from "@angular/common";
import {AdditionalData} from "../entities/AdditionalData";
import {HttpClientModule} from "@angular/common/http";
import {BackendService} from "../service/forms-back/backend.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-additional-data',
  templateUrl: './additional-data.component.html',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./additional-data.component.css'],
  providers: [BackendService]
})
export class AdditionalDataComponent implements OnInit {
  additionalDataForm: FormGroup;

  constructor(private fb: FormBuilder, private backendService: BackendService, private router: Router) {
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

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.additionalDataForm.valid) {
      let additionalData: AdditionalData = this.additionalDataForm.value;
      console.log(additionalData);
      this.backendService.createAdditionalData(additionalData).subscribe({
          next: (data) => {
            console.log('Data created successfully', data)
            if (data) {
              this.router.navigate(['/']).then(r => console.log('Navigated to home page'));
            }
          },
          error: (error) => {
            console.error('There was an error!', error)
          }
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
