import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategpriesComponent } from './add-categpries.component';

describe('AddCategpriesComponent', () => {
  let component: AddCategpriesComponent;
  let fixture: ComponentFixture<AddCategpriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategpriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategpriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
