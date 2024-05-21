import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-dir',
  templateUrl: './ng-class-dir.component.html',
  styleUrls: ['./ng-class-dir.component.css']
})
export class NgClassDirComponent {
  // Properties for ngClass with string, array, and objects
  classString: string = 'class-string';
  classArray: string[] = ['class-array1', 'class-array2'];
  classObject: any = {
    'class-obj1': true,
    'class-obj2': false
  };

  // Dynamically updating class names
  isHighlighted: boolean = true;
  classList: string[] = ['highlight', 'italic'];
  dynamicClassObject: any = {
    'highlight': this.isHighlighted,
    'italic': !this.isHighlighted
  };

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
    this.dynamicClassObject = {
      'highlight': this.isHighlighted,
      'italic': !this.isHighlighted
    };
  }
}
