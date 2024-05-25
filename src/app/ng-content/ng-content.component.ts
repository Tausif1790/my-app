import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.css'
})
export class NgContentComponent {

}
/*
Explanation:
app-course.component.ts:

Defines the AppCourseComponent that will use multiple <ng-content> elements to project content.
app-course.component.html:

Uses multiple <ng-content> elements with select attributes to project content into different slots based on CSS classes (.card-title and .btn).
app.component.html:

Demonstrates how to use the AppCourseComponent to create Bootstrap cards for different courses.
Each course card has a title and a button that are projected into the AppCourseComponent using the .card-title and .btn classes.
app.module.ts:

Declares the AppCourseComponent and imports necessary modules.
Summary:
app-course.component.ts: Defines the AppCourseComponent that serves as a container for multiple content projection slots.
app-course.component.html: Uses multiple <ng-content> elements with select attributes to project content into different slots.
app.component.html: Uses the AppCourseComponent to display Bootstrap cards for different courses, projecting the title and button content into the appropriate slots.
app.module.ts: Declares the components and imports necessary modules.
*/