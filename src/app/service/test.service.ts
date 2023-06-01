import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../model/test/test.model';
import { AppAuthService } from './app.auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestService{

  constructor(private http: HttpClient){}

  public getAllTests(): Observable<Array<Test>>{
    return this.http.get<Array<Test>>("/api/v1/test");
  }

  public saveTest(test: Test): Observable<Test>{
    return this.http.post<Test>("/api/v1/test", test);
  }

  public removeUserOrGroup(testId: number, userGroupId: number, type: string): Observable<Test>{
    return this.http.put<Test>(`/api/v1/test/${testId}/uninvite?type=${type}&id=${userGroupId}`,{});
  }

  public getTestById(id: number): Observable<Test>{
    return this.http.get<Test>(`/api/v1/test/${id}/administrator`);
  }

  public updateTest(test: Test): Observable<Test>{
    return this.http.put<Test>(`/api/v1/test/${test.id}`, test);
  }

}
