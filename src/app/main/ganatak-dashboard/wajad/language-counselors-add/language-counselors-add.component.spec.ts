import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCounselorsAddComponent } from './language-counselors-add.component';

describe('LanguageCounselorsAddComponent', () => {
  let component: LanguageCounselorsAddComponent;
  let fixture: ComponentFixture<LanguageCounselorsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageCounselorsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageCounselorsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
