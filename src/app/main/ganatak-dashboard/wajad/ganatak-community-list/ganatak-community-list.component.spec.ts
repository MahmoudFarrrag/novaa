import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanatakCommunityListComponent } from './ganatak-community-list.component';

describe('GanatakCommunityListComponent', () => {
  let component: GanatakCommunityListComponent;
  let fixture: ComponentFixture<GanatakCommunityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanatakCommunityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanatakCommunityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
