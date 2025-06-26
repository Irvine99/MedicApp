import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviTraitementsSection } from './suivi-traitements-section';

describe('SuiviTraitementsSection', () => {
  let component: SuiviTraitementsSection;
  let fixture: ComponentFixture<SuiviTraitementsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuiviTraitementsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviTraitementsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
