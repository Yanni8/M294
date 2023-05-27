import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { whoami } from './stage/user/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  private accessToken: String = "";

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(whoami());
  }

}
