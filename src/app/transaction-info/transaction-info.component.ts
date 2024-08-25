import {DatePipe, NgIf} from '@angular/common';
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {TransactionInfo} from "../entities/TransactionInfo";
import {BackendService} from "../service/backend.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgIf
  ],
  providers: [DatePipe, BackendService]
})
export class TransactionInfoComponent implements OnInit {
  transactionInfoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router, // Inject Router here
    private backService: BackendService
  ) {
  }

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

  submit() {
    if (this.transactionInfoForm.valid) {
      // Convert date fields to string format
      let formValue: TransactionInfo = this.transactionInfoForm.value;
      let localTransactionDateTime = this.datePipe.transform(formValue.localTransactionDateTime, 'yyyy-MM-ddTHH:mm:ss');
      if (localTransactionDateTime !== null) {
        formValue.localTransactionDateTime = new Date(localTransactionDateTime)
      }
      let expirationDate = this.datePipe.transform(formValue.expirationDate, 'yyyy-MM-dd');
      if (expirationDate !== null) {
        formValue.expirationDate = new Date(expirationDate)
      }

      this.backService.createTransactionInfo(formValue).subscribe({
        next: (data) => {
          this.router.navigate(['/additional-data']).then(r => console.log('Navigated to Additional Data'));
        },
        error: (error) => {
          alert('Error creating Transaction Info from the server');
        }
      })

      console.log('Form Submitted', formValue);
    } else {
      alert('Please fill all required fields');
    }
  }
}
