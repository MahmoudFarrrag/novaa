import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperFormAddComponent } from './paper-form-add.component';

describe('PaperFormAddComponent', () => {
  let component: PaperFormAddComponent;
  let fixture: ComponentFixture<PaperFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
