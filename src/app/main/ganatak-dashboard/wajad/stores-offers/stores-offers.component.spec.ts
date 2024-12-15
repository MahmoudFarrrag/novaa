import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresOffersComponent } from './stores-offers.component';

describe('StoresOffersComponent', () => {
  let component: StoresOffersComponent;
  let fixture: ComponentFixture<StoresOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoresOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
