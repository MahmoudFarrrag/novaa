import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCancelationReasonComponent } from './add-cancelation-reason.component';

describe('AddCancelationReasonComponent', () => {
  let component: AddCancelationReasonComponent;
  let fixture: ComponentFixture<AddCancelationReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCancelationReasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCancelationReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
