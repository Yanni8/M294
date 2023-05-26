import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Array<User>>{
    return of([
      {firstName: "Max", lastName: "Mustermann", id: -1, username: "Testing"}
    ] as Array<User>)
  }


}
