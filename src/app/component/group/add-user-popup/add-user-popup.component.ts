import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { loadAllUsers } from 'src/app/stage/user/user.action';
import { selectAllUsers } from 'src/app/stage/user/user.selector';

@Component({
  selector: 'app-add-user-popup',
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.less']
})
export class AddUserPopupComponent implements OnInit{

  public users: Array<User> = [];
  public previewUsers: Array<User> = [];
  public choseUser?: User;

  constructor(private store: Store, private dialogRef: MatDialogRef<AddUserPopupComponent>){}

  ngOnInit(): void {
    this.store.dispatch(loadAllUsers());
    this.store.select(selectAllUsers).subscribe(users => {this.users = users; this.previewUsers = users});
  }

  filter(key: string){
    key = key.toLocaleLowerCase();
    this.previewUsers = this.users.filter(user => user.username.toLocaleLowerCase().indexOf(key) !== -1)
  }

  loadUser(user: User){
    this.choseUser = user;
  }
}
