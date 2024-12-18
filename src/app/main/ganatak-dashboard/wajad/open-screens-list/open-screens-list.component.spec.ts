import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenScreensListComponent } from './open-screens-list.component';

describe('OpenScreensListComponent', () => {
  let component: OpenScreensListComponent;
  let fixture: ComponentFixture<OpenScreensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenScreensListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenScreensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
