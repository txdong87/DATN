import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyTableComponent } from './case-study-table.component';

describe('CaseStudyTableComponent', () => {
  let component: CaseStudyTableComponent;
  let fixture: ComponentFixture<CaseStudyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseStudyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
