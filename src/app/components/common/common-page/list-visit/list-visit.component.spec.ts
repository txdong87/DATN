import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisitComponent } from './list-visit.component';

describe('ListVisitComponent', () => {
  let component: ListVisitComponent;
  let fixture: ComponentFixture<ListVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVisitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
