import { DatePipe, NgIf } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  providers: [DatePipe]
})
export class TransactionInfoComponent implements OnInit {
  transactionInfoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router // Inject Router here
  ) { }

  ngOnInit(): void {
    this.transactionInfoForm = this.fb.group({
      primaryAccountNumber: ['', Validators.required],
      processingCode: ['', Validators.required],
      amountTransaction: ['', Validators.required],
      localTransactionDateTime: ['', Validators.required],
      expirationDate: [''],
      pointOfServiceDataCode: ['', Validators.required],
      cardSequenceNumber: ['', Validators.required],
      functionCode: ['', Validators.required],
      messageReasonCode: ['', Validators.required],
      amountsOriginal: ['', Validators.required],
      retrievalReferenceNumber: ['', Validators.required],
      approvalCode: ['', Validators.required],
      serviceCode: ['', Validators.required],
      acceptorTerminalId: ['', Validators.required],
      acceptorIdCode: ['', Validators.required],
      acceptorNameLocation: ['', Validators.required],
      currencyCodeTransaction: ['', Validators.required],
      iccSystemRelatedData: [''],
      transactionLifeCycleId: ['', Validators.required],
      messageNumber: ['', Validators.required],
      transactionDestinationInstitutionIdCode: ['', Validators.required]
    });
  }

  onSubmitTransactionInfo(): void {
    if (this.transactionInfoForm.valid) {
      // Convert date fields to string format
      const formValue = this.transactionInfoForm.value;
      formValue.localTransactionDateTime = this.datePipe.transform(formValue.localTransactionDateTime, 'yyyy-MM-ddTHH:mm:ss');
      formValue.expirationDate = this.datePipe.transform(formValue.expirationDate, 'yyyy-MM-dd');

      // Handle form submission
      console.log('Form Submitted', formValue);
    }
  }

  testClick() {
    console.log('Button clicked');
    this.router.navigate(['/additional-data']);
  }
}
