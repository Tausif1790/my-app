import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentCourseComponent } from './ng-content-course.component';

describe('NgContentCourseComponent', () => {
  let component: NgContentCourseComponent;
  let fixture: ComponentFixture<NgContentCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgContentCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgContentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
