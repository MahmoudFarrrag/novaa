import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageRootAddComponent } from './language-root-add.component';

describe('LanguageRootAddComponent', () => {
  let component: LanguageRootAddComponent;
  let fixture: ComponentFixture<LanguageRootAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageRootAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageRootAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
