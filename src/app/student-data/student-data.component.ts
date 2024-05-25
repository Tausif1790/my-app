import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../services/student.service';
import { Router } from '@angular/router'
//import {/* Student,*/ StudentService } from 'services.student.service';   // error 

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
  // if we dont we to add this line to every component then add this in 
      //providers: [StudentService] in app.module.ts 
  //providers: [StudentService]               // register StudentService
})
export class StudentDataComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | undefined;

  constructor(private studentService: StudentService, private router: Router) { 
    // or do it here
    // Fetch the list of students when the component initializes
    this.students = this.studentService.getStudents();
  }

  ngOnInit(): void {
    // Fetch the list of students when the component initializes
    this.students = this.studentService.getStudents();
  }

  onSelect(student: Student): void {
    // Fetch and display details of the selected student
    this.selectedStudent = this.studentService.getStudentById(student.id);
  }

  // 57.Auxiliary Routes | Named Routes | Multiple Routes 
  // button to close Auxiliary Router placeholder
  // url with Auxiliary Route : "http://localhost:54165/home(outlet2:student-data)"
  close(){
    this.router.navigate([{ outlets: { outlet2: null }}]);

    // close both Auxiliary Routes at once
    //this.router.navigate([{ outlets: { outlet2: null, outlet3: null }}]);
  }
}

/*
ngOnInit: ngOnInit is a lifecycle hook in Angular that is called after the constructor is called 
and after the component's inputs have been initialized. It is used to perform any additional initialization 
that is required for the component. ngOnInit is commonly used to call services or to set up subscriptions.

Dependency Injection: The StudentService is injected into the StudentDataComponent via the constructor,
 demonstrating Angular's dependency injection mechanism.
Service Usage: The component uses the service to fetch and display data,
 promoting separation of concerns and code reusability.
*/