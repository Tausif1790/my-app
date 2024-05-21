import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  // Initializing properties
  message: string = '';
  count: number = 0;

  // 1. Creating an Event Handler with button click
  onButtonClick(): void {
    this.message = 'Button clicked!';
  }

  // 2. Initializing class properties on button click
  incrementCount(): void {
    this.count += 1;
  }

  // 3. Event handler with parameters
  greetUser(userName: string): void {
    this.message = `Hello, ${userName}!`;
  }

  // 4. Event Object as argument
  showEventType(event: Event): void {
    console.log(event);
    this.message = `Event Type: ${event.type}`;
  }

  // 5. More Events
  onMouseOver(): void {
    this.message = 'Mouse Over!';
  }

  onMouseOut(): void {
    this.message = 'Mouse Out!';
  }

  onKeyUp(event: KeyboardEvent): void {
    this.message = `Key Up: ${event.key}`;
  }

  onKeyPress(event: KeyboardEvent): void {
    this.message = `Key Press: ${event.key}`;
  }
}
