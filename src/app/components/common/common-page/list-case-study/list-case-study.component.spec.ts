import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCaseStudyComponent } from './list-case-study.component';

describe('ListCaseStudyComponent', () => {
  let component: ListCaseStudyComponent;
  let fixture: ComponentFixture<ListCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCaseStudyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
