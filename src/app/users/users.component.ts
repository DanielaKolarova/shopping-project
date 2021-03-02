import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {id: "1", firstName: "Thomas", lastName: "Mann"}, 
      {id: "2", firstName: "Hermann", lastName: "Hesse"}, 
      {id: "1", firstName: "Bertoldt", lastName: "Brecht"}
    ];
  }

}
