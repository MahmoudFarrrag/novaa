import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguageSeedComponent } from './add-language-seed.component';

describe('AddLanguageSeedComponent', () => {
  let component: AddLanguageSeedComponent;
  let fixture: ComponentFixture<AddLanguageSeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguageSeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLanguageSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
