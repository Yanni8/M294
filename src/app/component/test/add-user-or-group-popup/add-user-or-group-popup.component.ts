import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Group } from 'src/app/model/group.model';
import { User } from 'src/app/model/user.model';
import { loadAllGroups } from 'src/app/stage/group/group.action';
import { selectAllGroups, selectAllGroupsSorted } from 'src/app/stage/group/group.selector';
import { loadAllUsers } from 'src/app/stage/user/user.action';
import { selectAllUsers } from 'src/app/stage/user/user.selector';

interface UserGroup{
  name: string,
  type: string,
  id: number,
}

@Component({
  selector: 'app-add-user-or-group-popup',
  templateUrl: './add-user-or-group-popup.component.html',
  styleUrls: ['./add-user-or-group-popup.component.less']
})
export class AddUserOrGroupPopupComponent implements OnInit{

  private users: Array<User> = [];
  private groups: Array<Group> = [];
  public userGroup: Array<UserGroup> = [];
  public previewUserGroup: Array<UserGroup> = [];
  public loadedUserGroup: UserGroup | null = null;
  
  constructor(private store: Store){}

  public reloadFilter(){
    const newUserGroup: Array<UserGroup> = [];
    this.users.forEach(user => newUserGroup.push({name: user.username, id: user.id || 0, type: "user"}));
    this.groups.forEach(group => newUserGroup.push({name: group.groupName, id: group.id || 0, type: "group"}));
    this.userGroup = newUserGroup;
    this.previewUserGroup = this.userGroup;
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllGroups());
    this.store.dispatch(loadAllUsers());
    this.store.select(selectAllGroups).subscribe(groups => {this.groups = groups; this.reloadFilter()});
    this.store.select(selectAllUsers).subscribe(users => {this.users = users; this.reloadFilter()});
  }

  filter(key: string){
    key = key.toLocaleLowerCase();
    this.previewUserGroup = this.userGroup.filter(userGroup => userGroup.name.toLocaleLowerCase().indexOf(key) !== -1);
  }

  loadGroupOrUser(userGroup: UserGroup){
    this.loadedUserGroup = userGroup;
  }
}
