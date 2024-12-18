import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesAddComponent } from './currencies-add.component';

describe('CurrenciesAddComponent', () => {
  let component: CurrenciesAddComponent;
  let fixture: ComponentFixture<CurrenciesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenciesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenciesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
