import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent {
  inputValue: string = '';
  keyupValue: string = '';
  placeholder: string = '';
  innerHtml: string = '';
  type: string = '';
  name: string = '';

  @ViewChild('inputRef') inputElementRef!: ElementRef;

  // Method to get text box value on button click
  getValueByClick(inputRef: HTMLInputElement) {
    this.inputValue = inputRef.value;
  }

  // Ex 2. Method to get text box value on button click
  getValueByClick2(value: string) {
    this.inputValue = value;
  }

  // Method to get text box value on keyup event
  getValueByKeyup(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.keyupValue = inputElement.value;
  }

  // Method to get attributes using template reference variable
  getAttributes(inputRef: HTMLInputElement) {
    this.placeholder = inputRef.placeholder;
    this.innerHtml = inputRef.innerHTML;
    this.type = inputRef.type;
    this.name = inputRef.name;
  }

  // Method to access template reference in TypeScript file
  accessTemplateRef() {
    this.placeholder = this.inputElementRef.nativeElement.placeholder;
    this.innerHtml = this.inputElementRef.nativeElement.innerHTML;
    this.type = this.inputElementRef.nativeElement.type;
    this.name = this.inputElementRef.nativeElement.name;
  }
}
