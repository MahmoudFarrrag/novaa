import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguageCounselorspaymentComponent } from './add-language-counselorspayment.component';

describe('AddLanguageCounselorspaymentComponent', () => {
  let component: AddLanguageCounselorspaymentComponent;
  let fixture: ComponentFixture<AddLanguageCounselorspaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguageCounselorspaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLanguageCounselorspaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
