import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelationReasonComponent } from './cancelation-reason.component';

describe('CancelationReasonComponent', () => {
  let component: CancelationReasonComponent;
  let fixture: ComponentFixture<CancelationReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelationReasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelationReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
