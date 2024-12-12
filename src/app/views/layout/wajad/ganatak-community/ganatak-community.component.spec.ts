import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanatakCommunityComponent } from './ganatak-community.component';

describe('GanatakCommunityComponent', () => {
  let component: GanatakCommunityComponent;
  let fixture: ComponentFixture<GanatakCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanatakCommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanatakCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
