import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CorrectedSolution } from 'src/app/model/solution/correctedSolution.model';
import { fetchAllSolutions } from 'src/app/stage/solution/solution.action';
import { selectAllSolutions } from 'src/app/stage/solution/solution.selector';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.less']
})
export class SolutionListComponent implements OnInit {

  public solutions: Array<CorrectedSolution> = [];
  public displayedColumns: string[] = ['user'];
  public index = 0;
  public pageSize = 10;
  public previeSolutions: Array<CorrectedSolution> = [];
  
  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(fetchAllSolutions());
    this.store.select(selectAllSolutions).subscribe(solutions => {this.solutions = solutions; this.updatePreviewSolutions()})
  }

  updatePreviewSolutions(){
    const length = this.solutions.length;
    if(this.pageSize * (this.index + 1) > length){
      this.previeSolutions = this.solutions.slice(this.pageSize * this.index, length);
    } else{
      this.previeSolutions = this.solutions.slice(this.pageSize * this.index, this.pageSize * (this.index + 1));
    }
  }

  changePage(event: any){
    this.index = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePreviewSolutions()
  }
}
