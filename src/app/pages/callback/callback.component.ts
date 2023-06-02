import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/stage/user/user.selector';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.less']
})
export class CallbackComponent implements OnInit{

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe(user => {if(user){window.location.href = "/home"}})
  }

}
