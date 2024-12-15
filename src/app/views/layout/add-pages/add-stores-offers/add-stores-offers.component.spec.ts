import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoresOffersComponent } from './add-stores-offers.component';

describe('AddStoresOffersComponent', () => {
  let component: AddStoresOffersComponent;
  let fixture: ComponentFixture<AddStoresOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStoresOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStoresOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
