import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageLightAddComponent } from './language-light-add.component';

describe('LanguageLightAddComponent', () => {
  let component: LanguageLightAddComponent;
  let fixture: ComponentFixture<LanguageLightAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageLightAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageLightAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
