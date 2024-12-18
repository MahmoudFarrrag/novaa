import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenScreensAddComponent } from './open-screens-add.component';

describe('OpenScreensAddComponent', () => {
  let component: OpenScreensAddComponent;
  let fixture: ComponentFixture<OpenScreensAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenScreensAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenScreensAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
