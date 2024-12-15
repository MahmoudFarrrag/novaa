import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePlansComponent } from './language-plans.component';

describe('LanguagePlansComponent', () => {
  let component: LanguagePlansComponent;
  let fixture: ComponentFixture<LanguagePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagePlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
