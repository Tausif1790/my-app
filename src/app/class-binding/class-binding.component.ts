import { Component } from '@angular/core';
import { Router } from '@angular/router'

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

  constructor(private router: Router) {
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

  // 57.Auxiliary Routes | Named Routes | Multiple Routes 
  // button to close Auxiliary Router placeholder
  // url with Auxiliary Route : "http://localhost:54165/home(outlet3:class-binding)"
  close(){
    this.router.navigate([{ outlets: { outlet3: null }}])
  }
}
