import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePlansAddComponent } from './language-plans-add.component';

describe('LanguagePlansAddComponent', () => {
  let component: LanguagePlansAddComponent;
  let fixture: ComponentFixture<LanguagePlansAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagePlansAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagePlansAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
