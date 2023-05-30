import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Group } from '../model/group.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  public getGroups(): Observable<Array<Group>>{
    return this.http.get<Array<Group>>("/api/v1/group");
  }

  public inviteUser(user: User, groupId: number): Observable<Group>{
    return this.http.put<Group>(`/api/v1/group/${groupId}/join?userId=${user.id}`,{});
  }
  public removeUser(user: User, groupId: number): Observable<Group>{
    return this.http.put<Group>(`/api/v1/group/${groupId}/leave?userId=${user.id}`,{});
  }
}