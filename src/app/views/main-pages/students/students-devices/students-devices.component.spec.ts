import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDevicesComponent } from './students-devices.component';

describe('StudentsDevicesComponent', () => {
  let component: StudentsDevicesComponent;
  let fixture: ComponentFixture<StudentsDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
