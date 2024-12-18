import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanatakCommunityAddComponent } from './ganatak-community-add.component';

describe('GanatakCommunityAddComponent', () => {
  let component: GanatakCommunityAddComponent;
  let fixture: ComponentFixture<GanatakCommunityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanatakCommunityAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanatakCommunityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
