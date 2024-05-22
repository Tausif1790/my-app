import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  //-------// Passing data Parent to Child Component //--------------//
  // Data to pass to child component
  singleData: string = 'Hello from Parent!';
  updatedData: string = 'Initial Data';
  arrayData: string[] = ['Angular', 'React', 'Vue'];
  objectData = { name: 'John Doe', age: 30 };

  // Method to update child data
  updateData() {
    this.updatedData = 'Updated Data from Parent!';
  }

  //-------// Passing data Parent to Child Component //--------------//
  receivedData: string = '';
  receivedArray: string[] = [];
  receivedObject: any = {};

  onReceiveData(data: string) {
    this.receivedData = data;
  }

  onReceiveArray(arrayData: string[]) {
    this.receivedArray = arrayData;
  }

  onReceiveObject(objectData: { name: string, age: number }) {
    this.receivedObject = objectData;
  }
}
