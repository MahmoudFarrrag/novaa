import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCounselorsComponent } from './add-counselors.component';

describe('AddCounselorsComponent', () => {
  let component: AddCounselorsComponent;
  let fixture: ComponentFixture<AddCounselorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCounselorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCounselorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
