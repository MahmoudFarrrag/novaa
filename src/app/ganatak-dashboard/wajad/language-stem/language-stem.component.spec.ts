import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageStemComponent } from './language-stem.component';

describe('LanguageStemComponent', () => {
  let component: LanguageStemComponent;
  let fixture: ComponentFixture<LanguageStemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageStemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageStemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
