import { Component } from '@angular/core';
import { AppAuthService } from 'src/app/service/app.auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent  {

  constructor (private authService: AppAuthService){}

  get isLogedIn(){
    return this.authService.isAuthenticated();
  }

  isHome(){
    return window.location.pathname === "/home";
  }

}
