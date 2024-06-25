import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCdhaComponent } from './list-cdha.component';

describe('ListCdhaComponent', () => {
  let component: ListCdhaComponent;
  let fixture: ComponentFixture<ListCdhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCdhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCdhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
