import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpenScreensComponent } from './add-open-screens.component';

describe('AddOpenScreensComponent', () => {
  let component: AddOpenScreensComponent;
  let fixture: ComponentFixture<AddOpenScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOpenScreensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOpenScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
