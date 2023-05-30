import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddUserPopupComponent } from 'src/app/component/group/add-user-popup/add-user-popup.component';
import { Group } from 'src/app/model/group.model';
import { User } from 'src/app/model/user.model';
import { deleteGroup, inviteUserToGroup, loadAllGroups, removeUser } from 'src/app/stage/group/group.action';
import { selectAllGroups } from 'src/app/stage/group/group.selector';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.less']
})
export class GroupListComponent implements OnInit {

  public groups: Array<Group> = [];
  public displayedColumns: String[] = ['groupName', 'users', 'action'];
  public index = 0;
  public pageSize = 10;
  public previewGroups: Array<Group> = [];

  constructor(private store: Store, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(loadAllGroups());
    this.store.select(selectAllGroups).subscribe(groups => { this.groups = groups; this.updatePreviewUser() });
  }

  updatePreviewUser() {
    const length = this.groups.length;
    if (this.pageSize * (this.index + 1) > length) {
      this.previewGroups = this.groups.slice(this.pageSize * this.index, length);
    } else {
      this.previewGroups = this.groups.slice(this.pageSize * this.index, this.pageSize * (this.index + 1));
    }
  }

  changePage(event: any) {
    this.index = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePreviewUser();
  }

  deleteGroup(id: number){
    this.store.dispatch(deleteGroup({groupId: id}))
  }

  addUser(groupId: number){
    let dialogRef = this.dialog.open(AddUserPopupComponent, {
      height: '20rem',
      width: '30rem',
    });

    dialogRef.afterClosed().subscribe(data => {if(data){this.store.dispatch(inviteUserToGroup({user: data, groupId: groupId}))}});

  }

  removeUser(user:User, id: number){
    this.store.dispatch(removeUser({groupId: id, user: user}))
  }
}
