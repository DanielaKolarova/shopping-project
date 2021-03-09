import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): User[] {
    return[
      {id: "1", firstName: "Thomas", lastName: "Mann", email: "mann@gmail.com"}, 
      {id: "2", firstName: "Hermann", lastName: "Hesse", email: "hermann@gmail.com"}, 
      {id: "1", firstName: "Bertoldt", lastName: "Brecht", email: "bertoldt@gmail.com"}
    ];
  }
}
