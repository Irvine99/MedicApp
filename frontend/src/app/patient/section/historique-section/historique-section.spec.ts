import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueSection } from './historique-section';

describe('HistoriqueSection', () => {
  let component: HistoriqueSection;
  let fixture: ComponentFixture<HistoriqueSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
