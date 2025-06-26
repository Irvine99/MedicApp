import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuranceSection } from './assurance-section';

describe('AssuranceSection', () => {
  let component: AssuranceSection;
  let fixture: ComponentFixture<AssuranceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssuranceSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssuranceSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
