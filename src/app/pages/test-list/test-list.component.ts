import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Test } from 'src/app/model/test/test.model';
import { AppAuthService } from 'src/app/service/app.auth.service';
import { fetchAllTestsAdministrator } from 'src/app/stage/test/test.action';
import { selectAllTests } from 'src/app/stage/test/test.selector';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.less']
})
export class TestListComponent implements OnInit{
 
  public isAdmin: boolean = false;
  public tests: Array<Test> = [];
  public displayedColumns: String[] = ['title', 'users', 'groups'];
  public index = 0;
  public pageSize = 10;
  public previeTests: Array<Test> = [];

  constructor(private authService: AppAuthService, private router: Router, private store: Store) { }


  ngOnInit(): void {
    this.authService.getRoles().subscribe(roles => {if(roles.indexOf("admin") !== -1){this.router.navigate(['test', 'administrator'])}})

    this.isAdmin = window.location.pathname === "/test/administrator"
    if(this.isAdmin){
      this.store.dispatch(fetchAllTestsAdministrator())
    }

    this.store.select(selectAllTests).subscribe(tests => {this.tests = tests; this.updatePreviewTests()});
    
  }
  updatePreviewTests(){
    const length = this.tests.length;
    if(this.pageSize * (this.index + 1) > length){
      this.previeTests = this.tests.slice(this.pageSize * this.index, length);
    } else{
      this.previeTests = this.tests.slice(this.pageSize * this.index, this.pageSize * (this.index + 1));
    }
  }

  changePage(event: any){
    this.index = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePreviewTests()
  }
}
