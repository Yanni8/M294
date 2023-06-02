import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CorrectedSolution } from 'src/app/model/solution/correctedSolution.model';
import { fetchSolutionById } from 'src/app/stage/solution/solution.action';
import { selectSolutionById } from 'src/app/stage/solution/solution.selector';

@Component({
  selector: 'app-solution-detail',
  templateUrl: './solution-detail.component.html',
  styleUrls: ['./solution-detail.component.less']
})
export class SolutionDetailComponent implements OnInit {

  public solution: CorrectedSolution | null = null;

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const solutionId = this.route.snapshot.paramMap.get("id");

    if (!solutionId) {
      return;
    }
    this.store.select(selectSolutionById({ id: +solutionId })).subscribe(solution => {this.solution = solution || null ; console.log(solution)});

    if (!this.solution) {
      this.store.dispatch(fetchSolutionById({ id: +solutionId }));
    }
  }

}
