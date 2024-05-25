import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingEmployeesComponent } from './routing-employees.component';

describe('RoutingEmployeesComponent', () => {
  let component: RoutingEmployeesComponent;
  let fixture: ComponentFixture<RoutingEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingEmployeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
