import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguageRootComponent } from './add-language-root.component';

describe('AddLanguageRootComponent', () => {
  let component: AddLanguageRootComponent;
  let fixture: ComponentFixture<AddLanguageRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguageRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLanguageRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
