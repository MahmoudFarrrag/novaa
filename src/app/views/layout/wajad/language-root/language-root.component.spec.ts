import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageRootComponent } from './language-root.component';

describe('LanguageRootComponent', () => {
  let component: LanguageRootComponent;
  let fixture: ComponentFixture<LanguageRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
