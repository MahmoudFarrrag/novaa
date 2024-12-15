import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageLightComponent } from './language-light.component';

describe('LanguageLightComponent', () => {
  let component: LanguageLightComponent;
  let fixture: ComponentFixture<LanguageLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
