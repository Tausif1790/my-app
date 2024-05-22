import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  // 1. Binding to a property
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';

  // 2. Binding to a class property
  isActive: boolean = true;

  // 3. Binding to an attribute
  buttonDisabled: boolean = true;

  // 4. Binding to a style property
  textColor: string = 'red';

  // 5. Using property binding to initialize input value
  inputText: string = 'Initial text';
}
