import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClsComponent } from './add-cls.component';

describe('AddClsComponent', () => {
  let component: AddClsComponent;
  let fixture: ComponentFixture<AddClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
