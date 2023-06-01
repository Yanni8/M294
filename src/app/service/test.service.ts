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

}
