import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', age: 16, grade: '10th' },
    { id: 2, name: 'Jane Smith', age: 17, grade: '11th' },
    { id: 3, name: 'Sam Johnson', age: 15, grade: '9th' }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }
}
