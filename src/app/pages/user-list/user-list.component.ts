import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { loadAllUsers } from 'src/app/stage/user/user.action';
import { selectAllUsers } from 'src/app/stage/user/user.selector';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit{

  public users: Array<User> = [];

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(loadAllUsers());
    this.store.select(selectAllUsers).subscribe(_users => this.users = _users); 
  }

}
