import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCDHAComponent } from './tab-cdha.component';

describe('TabCDHAComponent', () => {
  let component: TabCDHAComponent;
  let fixture: ComponentFixture<TabCDHAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabCDHAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabCDHAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
