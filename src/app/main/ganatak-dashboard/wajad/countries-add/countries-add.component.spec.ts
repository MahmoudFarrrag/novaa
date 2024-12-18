import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesAddComponent } from './countries-add.component';

describe('CountriesAddComponent', () => {
  let component: CountriesAddComponent;
  let fixture: ComponentFixture<CountriesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
