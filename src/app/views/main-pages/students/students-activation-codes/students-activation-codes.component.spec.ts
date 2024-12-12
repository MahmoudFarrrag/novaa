import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsActivationCodesComponent } from './students-activation-codes.component';

describe('StudentsActivationCodesComponent', () => {
  let component: StudentsActivationCodesComponent;
  let fixture: ComponentFixture<StudentsActivationCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsActivationCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsActivationCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
