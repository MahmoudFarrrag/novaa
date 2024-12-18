import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSoilAddComponent } from './language-soil-add.component';

describe('LanguageSoilAddComponent', () => {
  let component: LanguageSoilAddComponent;
  let fixture: ComponentFixture<LanguageSoilAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSoilAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSoilAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
