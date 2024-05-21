import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  // Properties for two-way data binding
  userName: string = '';
  userAge: number = 25;
  userEmail: string = '';
}
