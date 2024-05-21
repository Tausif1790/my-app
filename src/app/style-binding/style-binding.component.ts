import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  // Properties for single style binding
  textColor: string = 'blue';
  fontSize: string = '20px';

  // Properties for multiple style binding
  isHighlighted: boolean = true;

  // Properties for ngStyle
  stylesObject: any = {
    'color': 'green',
    'font-weight': 'bold',
    'text-decoration': 'underline'
  };

  // Method to toggle styles
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
