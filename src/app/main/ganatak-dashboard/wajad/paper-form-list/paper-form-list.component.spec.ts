import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperFormListComponent } from './paper-form-list.component';

describe('PaperFormListComponent', () => {
  let component: PaperFormListComponent;
  let fixture: ComponentFixture<PaperFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
