import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguageLightComponent } from './add-language-light.component';

describe('AddLanguageLightComponent', () => {
  let component: AddLanguageLightComponent;
  let fixture: ComponentFixture<AddLanguageLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguageLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLanguageLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
