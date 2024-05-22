import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  // Lowercase and Uppercase pipes
  text: string = 'Hello Angular';

  // Titlecase pipe
  titleText: string = 'angular is awesome';

  // Slice pipe
  fruits: string[] = ['Apple', 'Banana', 'Cherry', 'Date'];

  // JSON pipe
  jsonObject: object = { name: 'John', age: 30, city: 'New York' };

  // Date pipe
  today: Date = new Date();
  futureDate: Date = new Date(2025, 11, 31);

  // Currency pipe
  price: number = 199.99;
  largePrice: number = 1234567.89;

  // Percent pipe
  completion: number = 0.75;

  // Decimal pipe
  decimalNumber: number = 3.14159265359;
}
