import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGanatakCommunityComponent } from './add-ganatak-community.component';

describe('AddGanatakCommunityComponent', () => {
  let component: AddGanatakCommunityComponent;
  let fixture: ComponentFixture<AddGanatakCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGanatakCommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGanatakCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
