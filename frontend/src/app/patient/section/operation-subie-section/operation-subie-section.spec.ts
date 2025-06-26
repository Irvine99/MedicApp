import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationSubieSection } from './operation-subie-section';

describe('OperationSubieSection', () => {
  let component: OperationSubieSection;
  let fixture: ComponentFixture<OperationSubieSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationSubieSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationSubieSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
