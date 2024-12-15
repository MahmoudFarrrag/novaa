import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguagePlantcardsComponent } from './add-language-plantcards.component';

describe('AddLanguagePlantcardsComponent', () => {
  let component: AddLanguagePlantcardsComponent;
  let fixture: ComponentFixture<AddLanguagePlantcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguagePlantcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLanguagePlantcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
