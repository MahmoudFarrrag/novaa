import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCounselorspaymentComponent } from './language-counselorspayment.component';

describe('LanguageCounselorspaymentComponent', () => {
  let component: LanguageCounselorspaymentComponent;
  let fixture: ComponentFixture<LanguageCounselorspaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageCounselorspaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageCounselorspaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
