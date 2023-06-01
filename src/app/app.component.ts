import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './model/user.model';
import { whoami } from './stage/user/user.action';
import { selectCurrentUser } from './stage/user/user.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{


  public currentUser: User | null = null;

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe(currentUser => this.currentUser = currentUser)
    if(!this.currentUser){
      this.store.dispatch(whoami()); 
    }
  }

}
