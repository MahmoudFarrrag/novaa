import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenScreensComponent } from './open-screens.component';

describe('OpenScreensComponent', () => {
  let component: OpenScreensComponent;
  let fixture: ComponentFixture<OpenScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenScreensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
