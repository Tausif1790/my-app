import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  // 1. Display properties' values
  public title: string = 'Angular Interpolation';
  user: string = 'John Doe';
  age: number = 30;

  // 4. Use JavaScript properties and methods
  currentDate: Date = new Date();

  // 5. Custom methods
  getWelcomeMessage(): string {
    return `Welcome, ${this.user}!`;
  }
}
