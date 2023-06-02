import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './model/user.model';
import { selectAllNotifications } from './stage/notification/notification.selector';
import { whoami } from './stage/user/user.action';
import { selectCurrentUser } from './stage/user/user.selector';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Notification } from './model/notification.model';
import { removeFirstNotification } from './stage/notification/notification.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {


  public currentUser: User | null = null;

  public notifications: Array<Notification> = [];

  constructor(private store: Store, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe(currentUser => this.currentUser = currentUser)
    if (!this.currentUser) {
      this.store.dispatch(whoami());
    }

    this.store.select(selectAllNotifications).subscribe(notifications => { this.notifications = notifications || []; this.updatePopup() });
  }

  updatePopup() {
    if (this.notifications.length === 0) {
      return;
    }
    this._snackBar.open(this.notifications[0].desc, "Okay").afterDismissed().subscribe(() => this.store.dispatch(removeFirstNotification()));
  }

}
