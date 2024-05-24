// reactive-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Employee } from './employee';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  employeeForm: FormGroup;
  departments: string[] = ['HR', 'Engineering', 'Finance', 'Marketing'];
  skillsList: string[] = ['JavaScript', 'Angular', 'React', 'Node.js'];

  constructor(private fb: FormBuilder) {
    // Initialize the form with FormBuilder
    this.employeeForm = this.fb.group({
      id: ['', [Validators.required]],                 // Employee ID with required validator
      name: ['', [Validators.required, Validators.minLength(2)]],                   // Name with required and minlength validators
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],     // Age with required, min, and max validators
      gender: ['', [Validators.required]],             // Gender with required validator
      department: ['', [Validators.required]],         // Department with required validator
      skills: this.fb.array(this.skillsList.map(() => this.fb.control(false))),    // Skills as a FormArray of checkboxes
      email: ['', [Validators.required, Validators.email]],                        // Email with required and email validators
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]          // Phone with required and pattern validators
    });
  }

  ngOnInit(): void {}

  get skillsControls() {
    // Getter for the skills controls array
    return (this.employeeForm.get('skills') as FormArray).controls;
  }

  // this is one way to control form in signupForm object for every field (lecture)
  // signupForm = new FormGroup(
  //   {
  //     name2: new FormControl('', [Validators.required]),         // this.f['name'].value, // same
  //     age2: new FormControl('', [Validators.required]),
  //     email2: new FormControl('', [Validators.required])
  //   });

  // this is another way to control form in employeeForm object for every field by using getter method
  get f() {
    // Getter for easy access to form controls
    // this.signupForm.controls;
    return this.employeeForm.controls;                  // return all form control
    //return this.employeeForm.controls['id'];          // form control for specific field
    //return this.employeeForm.controls['name'];        // form control for specific field
  }

  onSubmit(): void {
    // console.log(this.signupForm.value);
    // Handle form submission
    if (this.employeeForm.valid) {
      const selectedSkills = this.employeeForm.value.skills
        .map((checked: boolean, i: number) => checked ? this.skillsList[i] : null)
        .filter((v: string | null) => v !== null);       // Extract selected skills

      const employee: Employee = new Employee(
        this.f['id'].value,
        this.f['name'].value,                 // this.f['name'] ==> name control
        this.f['age'].value,

        this.f['gender'].value,               // this.f['gender'] ==> gender control
        this.f['department'].value,

        selectedSkills,

        this.f['email'].value,
        this.f['phone'].value
      );
      console.log('Form Submitted!', employee);          // Log the submitted form data
    }
  }

  resetForm(): void {
    // Reset the form
    this.employeeForm.reset();
  }
}
