import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPatientSection } from './info-patient-section';

describe('InfoPatientSection', () => {
  let component: InfoPatientSection;
  let fixture: ComponentFixture<InfoPatientSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPatientSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPatientSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
