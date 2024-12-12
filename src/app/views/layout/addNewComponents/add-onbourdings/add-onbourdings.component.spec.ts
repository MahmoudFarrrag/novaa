import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnbourdingsComponent } from './add-onbourdings.component';

describe('AddOnbourdingsComponent', () => {
  let component: AddOnbourdingsComponent;
  let fixture: ComponentFixture<AddOnbourdingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnbourdingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnbourdingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
