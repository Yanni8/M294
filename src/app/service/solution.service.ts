import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CorrectedSolution } from '../model/solution/correctedSolution.model';
import { Solution } from '../model/solution/solution.model';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor(private http: HttpClient) { }


  public submitSolution(solution: Solution, testId: number, userId: number): Observable<CorrectedSolution>{
    return this.http.post<CorrectedSolution>(`/api/v1/solution/?testId=${testId}&userId=${userId}`, solution);
  }

}
