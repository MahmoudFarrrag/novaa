import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSeedComponent } from './language-seed.component';

describe('LanguageSeedComponent', () => {
  let component: LanguageSeedComponent;
  let fixture: ComponentFixture<LanguageSeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
