import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { AppAuthService } from 'src/app/service/app.auth.service';
import { selectCurrentUser } from 'src/app/stage/user/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public user: User | null = null;

  constructor(private authService: AppAuthService, private store: Store){}

  get isLogedIn(){
    return this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe(user => this.user = user || null);
  }
}
