import { Component } from '@angular/core';

@Component({
  selector: 'app-structure-directives',
  templateUrl: './structure-directives.component.html',
  styleUrls: ['./structure-directives.component.css']
})
export class StructureDirectivesComponent {
  // Properties for ngIf and ngIf-else
  isVisible: boolean = true;
  isUserLoggedIn: boolean = false;

  // Properties for ngSwitch
  viewMode: string = 'map';

  // Properties for ngFor
  stringArray: string[] = ['Angular', 'React', 'Vue'];
  
  objectArray: { id: number, name: string }[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' }
  ];

  // Properties for nested ngFor
  categories: { name: string, items: string[] }[] = [
    { name: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { name: 'Vegetables', items: ['Carrot', 'Broccoli', 'Spinach'] }
  ];
}
