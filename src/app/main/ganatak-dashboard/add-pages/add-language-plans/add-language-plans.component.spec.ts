import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguagePlansComponent } from './add-language-plans.component';

describe('AddLanguagePlansComponent', () => {
  let component: AddLanguagePlansComponent;
  let fixture: ComponentFixture<AddLanguagePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguagePlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLanguagePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
