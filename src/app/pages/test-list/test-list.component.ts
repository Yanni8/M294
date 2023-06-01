import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddUserOrGroupPopupComponent } from 'src/app/component/test/add-user-or-group-popup/add-user-or-group-popup.component';
import { Test } from 'src/app/model/test/test.model';
import { AppAuthService } from 'src/app/service/app.auth.service';
import { deleteTestById, fetchAllTestsAdministrator, removeUserOrGroup } from 'src/app/stage/test/test.action';
import { selectAllTests } from 'src/app/stage/test/test.selector';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.less']
})
export class TestListComponent implements OnInit{
 
  public isAdmin = false;
  public tests: Array<Test> = [];
  public displayedColumns: string[] = ['title', 'users', 'groups', 'action'];
  public index = 0;
  public pageSize = 10;
  public previeTests: Array<Test> = [];

  constructor(private authService: AppAuthService, private router: Router, private store: Store, private dialog: MatDialog) { }


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

  removeUserOrGroup(id: number, userGroupId: number, type: string){
    this.store.dispatch(removeUserOrGroup({idType: type, testId: id, userGroupId: userGroupId}));
  }

  deleteTest(id: number){
    this.store.dispatch(deleteTestById({id: id}));
  }

  addUserOrGroup(id: number){
    const dialogRef = this.dialog.open(AddUserOrGroupPopupComponent, {
      height: '20rem',
      width: '30rem',
    });
/**
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    */
  }
}
