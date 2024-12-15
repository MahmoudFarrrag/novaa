import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguageSoilComponent } from './add-language-soil.component';

describe('AddLanguageSoilComponent', () => {
  let component: AddLanguageSoilComponent;
  let fixture: ComponentFixture<AddLanguageSoilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguageSoilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLanguageSoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
