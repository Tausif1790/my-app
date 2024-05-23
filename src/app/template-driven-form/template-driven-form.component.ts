import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  departments: string[] = ['HR', 'Engineering', 'Finance', 'Marketing'];
  skillsList: string[] = ['JavaScript', 'Angular', 'React', 'Node.js'];
  employee: Employee = new Employee('', '', '', {}, '', '', null, null);

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      console.log('Employee Data:', this.employee);
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.employee = new Employee('', '', '', {}, '', '', null, null);
  }
}
