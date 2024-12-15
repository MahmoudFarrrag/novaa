import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSoilComponent } from './language-soil.component';

describe('LanguageSoilComponent', () => {
  let component: LanguageSoilComponent;
  let fixture: ComponentFixture<LanguageSoilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSoilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
