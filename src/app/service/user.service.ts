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
    return this.http.get<Array<User>>("/api/v1/user");
  }

  public whoami(): Observable<User>{
    return this.http.get<User>("/api/v1/user/whoami");
  }

  public deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`/api/v1/user/${id}`);
  }

  public getUserById(id: number): Observable<User>{
    return this.http.get<User>(`/api/v1/user/${id}/administrator`)
  }
}
