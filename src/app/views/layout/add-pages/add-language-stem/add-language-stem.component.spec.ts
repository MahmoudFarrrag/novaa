import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguageStemComponent } from './add-language-stem.component';

describe('AddLanguageStemComponent', () => {
  let component: AddLanguageStemComponent;
  let fixture: ComponentFixture<AddLanguageStemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguageStemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLanguageStemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
