import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  //--------------------// Passing data Parent to Child Component //--------------------//
  @Input() data: string = '';
  @Input() arrayData: string[] = [];
  @Input() objectData: any = {};          // put any for object

  //--------------------// Passing data Child to Parent Component //--------------------//
  @Output() sendData = new EventEmitter<string>();
  @Output() sendArray = new EventEmitter<string[]>();
  @Output() sendObject = new EventEmitter<{ name: string, age: number }>();

  // Method to send single data
  emitData() {
    this.sendData.emit('Hello from Child!');
  }

  // Method to send array data
  emitArray() {
    const arrayData = ['Angular', 'React', 'Vue'];
    this.sendArray.emit(arrayData);
  }

  // Method to send object data
  emitObject() {
    const objectData = { name: 'Jane Doe', age: 25 };
    this.sendObject.emit(objectData);
  }
}
