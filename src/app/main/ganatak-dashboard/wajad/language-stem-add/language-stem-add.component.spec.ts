import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageStemAddComponent } from './language-stem-add.component';

describe('LanguageStemAddComponent', () => {
  let component: LanguageStemAddComponent;
  let fixture: ComponentFixture<LanguageStemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageStemAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageStemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
