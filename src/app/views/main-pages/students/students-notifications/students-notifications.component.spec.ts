import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsNotificationsComponent } from './students-notifications.component';

describe('StudentsNotificationsComponent', () => {
  let component: StudentsNotificationsComponent;
  let fixture: ComponentFixture<StudentsNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
