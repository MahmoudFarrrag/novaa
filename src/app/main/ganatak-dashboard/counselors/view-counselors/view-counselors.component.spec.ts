import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCounselorsComponent } from './view-counselors.component';

describe('ViewCounselorsComponent', () => {
  let component: ViewCounselorsComponent;
  let fixture: ComponentFixture<ViewCounselorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCounselorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCounselorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
