import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesAddComponent } from './sizes-add.component';

describe('SizesAddComponent', () => {
  let component: SizesAddComponent;
  let fixture: ComponentFixture<SizesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
