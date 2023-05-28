import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../model/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  public getGroups(): Observable<Array<Group>>{
    return this.http.get<Array<Group>>("/api/v1/group");
  }
}
