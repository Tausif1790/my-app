import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingChild2Component } from './routing-child2.component';

describe('RoutingChild2Component', () => {
  let component: RoutingChild2Component;
  let fixture: ComponentFixture<RoutingChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
