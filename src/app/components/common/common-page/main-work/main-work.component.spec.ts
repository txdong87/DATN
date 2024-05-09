import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWorkComponent } from './main-work.component';

describe('MainWorkComponent', () => {
  let component: MainWorkComponent;
  let fixture: ComponentFixture<MainWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
