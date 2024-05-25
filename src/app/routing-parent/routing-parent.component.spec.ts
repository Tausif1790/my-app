import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingParentComponent } from './routing-parent.component';

describe('RoutingParentComponent', () => {
  let component: RoutingParentComponent;
  let fixture: ComponentFixture<RoutingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
