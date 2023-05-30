import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
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

  public deleteGroup(id: number): Observable<void>{
    return this.http.delete<void>(`/api/v1/group/${id}`);
  }

  public createGroup(group: Group): Observable<Group>{
    return this.http.post<Group>("/api/v1/group/", group);
  }
  public getGroupById(id: number): Observable<Group>{
    return this.http.get<Group>(`/api/v1/group/${id}/administrator`)
  }

  public updateGroup(group: Group): Observable<Group>{
    return this.http.put<Group>(`/api/v1/group/${group.id}`, group)
  }

}