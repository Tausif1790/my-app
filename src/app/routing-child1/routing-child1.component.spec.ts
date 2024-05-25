import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingChild1Component } from './routing-child1.component';

describe('RoutingChild1Component', () => {
  let component: RoutingChild1Component;
  let fixture: ComponentFixture<RoutingChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
