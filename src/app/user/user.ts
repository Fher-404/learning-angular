import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
username = 'Fernando';
isLoggedIn = true;


greetUser() {
  alert(`Welcome back, ${this.username}!`);
}
}