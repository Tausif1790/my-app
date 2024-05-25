import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingEmployeeDetailsComponent } from './routing-employee-details.component';

describe('RoutingEmployeeDetailsComponent', () => {
  let component: RoutingEmployeeDetailsComponent;
  let fixture: ComponentFixture<RoutingEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingEmployeeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
