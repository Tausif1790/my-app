import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// @Injectable is a decorator in Angular that marks a class as available to be provided and
  // injected as a dependency. It allows Angular's dependency injection system to create and
    // inject instances of the class where needed.
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // What is HttpClient?
  // HttpClient is an Angular service that allows you to make HTTP requests to interact with remote servers.
  //    It supports methods like GET, POST, PUT, DELETE, etc.
  constructor(private http: HttpClient) { }

  //. An Observable is a key part of the Reactive Extensions for JavaScript (RxJS) library,
    // which Angular uses for handling asynchronous operations. Post[] indicates that the
      // observable will emit an array of Post objects.
  getPosts(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
