import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  error: string | null = null;

  constructor(private userService: UserService) { }

  // Subscribe: the subscribe method is used to subscribe to an observable, which allows you to handle asynchronous data streams.
    // In the context of the ngOnInit lifecycle hook, subscribing to the getPosts method of UserService is how you
      // handle the HTTP GET request to fetch data when the component initializes.
  ngOnInit(): void {
    this.userService.getPosts().subscribe(
      (response: User[]) => { 
        this.users = response;
      },
      (error) => {
        this.error = 'Failed to fetch data';
      }
    );
  }
}

/*
Additional Comments:
HTTP Client: The HttpClientModule is imported to make HTTP requests.
 The UserService uses HttpClient to fetch data from the API.
Error Handling: The component handles errors by setting an error message when the API request fails.
Async Data: The component subscribes to the observable returned by the service to handle the
 asynchronous nature of the HTTP request.
*/