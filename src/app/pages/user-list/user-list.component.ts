import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { deleteUser, loadAllUsers } from 'src/app/stage/user/user.action';
import { selectAllUsers } from 'src/app/stage/user/user.selector';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit{

  public users: Array<User> = [];
  public displayedColumns: String[] = ['username', 'lastname', 'firstname', 'action'];
  public index = 0;
  public pageSize = 10;
  public previewUsers: Array<User> = [];

  constructor(private store: Store){}


  updatePreviewUser(){
    const length = this.users.length;
    if(this.pageSize * (this.index + 1) > length){
      this.previewUsers = this.users.slice(this.pageSize * this.index, length);
    } else{
      this.previewUsers = this.users.slice(this.pageSize * this.index, this.pageSize * (this.index + 1));
    }
    console.log(this.users);
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllUsers());
    this.store.select(selectAllUsers).subscribe(_users => {this.users = _users; this.updatePreviewUser()}); 
  }

  changePage(event: any){
    this.index = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePreviewUser()
  }

  deleteUser(id: number){
    this.store.dispatch(deleteUser({id: id}));
  }
}
