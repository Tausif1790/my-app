import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
  // Initializing properties for class binding
  isSpecial: boolean = true;
  hasError: boolean = false;
  currentClasses: {} = {}; 

  constructor() {
    // Set current classes based on properties
    this.setCurrentClasses();
  }

  // Method to set the current classes
  setCurrentClasses() {
    this.currentClasses = {
      'special': this.isSpecial,
      'error': this.hasError
    };
  }

  // Method to toggle error class
  toggleError() {
    this.hasError = !this.hasError;
    this.setCurrentClasses();
  }

  // conditionally classes
  myClass(){
    if(4 < 10){
      return "a";
    }
    else{
      return "b";
    }
  }
}
