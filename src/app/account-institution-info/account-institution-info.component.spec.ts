import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInstitutionInfoComponent } from './account-institution-info.component';

describe('AccountInstitutionInfoComponent', () => {
  let component: AccountInstitutionInfoComponent;
  let fixture: ComponentFixture<AccountInstitutionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountInstitutionInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountInstitutionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
