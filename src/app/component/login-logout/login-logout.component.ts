import { Component } from '@angular/core';
import { AppAuthService } from 'src/app/service/app.auth.service';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.less']
})
export class LoginLogoutComponent {

  constructor(private authService: AppAuthService){}

  get isLogedIn(){
    return this.authService.isAuthenticated();
  }

  login(){
    this.authService.login()
  }

  logout(){
    this.authService.logout()
  }

}
