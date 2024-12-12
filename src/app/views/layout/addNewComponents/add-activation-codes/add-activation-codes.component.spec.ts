import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivationCodesComponent } from './add-activation-codes.component';

describe('AddActivationCodesComponent', () => {
  let component: AddActivationCodesComponent;
  let fixture: ComponentFixture<AddActivationCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActivationCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActivationCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
