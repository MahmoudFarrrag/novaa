import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaperformComponent } from './add-paperform.component';

describe('AddPaperformComponent', () => {
  let component: AddPaperformComponent;
  let fixture: ComponentFixture<AddPaperformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaperformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaperformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
