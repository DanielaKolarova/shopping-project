import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users(): User[] {
    return[
      {id: "1", firstName: "Thomas", lastName: "Mann"}, 
      {id: "2", firstName: "Hermann", lastName: "Hesse"}, 
      {id: "1", firstName: "Bertoldt", lastName: "Brecht"}
    ];;
}
}
