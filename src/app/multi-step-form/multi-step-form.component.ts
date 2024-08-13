import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  standalone: true,
  styleUrls: ['./multi-step-form.component.css'],
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ]
})
export class MultiStepFormComponent implements OnInit {
  transactionForm1!: FormGroup;
  transactionForm2!: FormGroup;
  cities: string[] = ['New York', 'Los Angeles', 'Chicago'];

  constructor(private fb: FormBuilder, private router: Router) {}

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

  onSubmit1() {
    if (this.transactionForm1.valid) {
      this.router.navigate(['/account-institution-info']);
    }
  }

  onSubmit2() {
    if (this.transactionForm2.valid) {
      this.router.navigate(['/account-institution-info']);
    }
  }

  testClick() {
    console.log('Button clicked');
    this.router.navigate(['/account-institution-info']);
  }
}
