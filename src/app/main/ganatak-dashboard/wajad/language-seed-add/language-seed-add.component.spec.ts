import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSeedAddComponent } from './language-seed-add.component';

describe('LanguageSeedAddComponent', () => {
  let component: LanguageSeedAddComponent;
  let fixture: ComponentFixture<LanguageSeedAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSeedAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSeedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
