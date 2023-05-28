import { NgModule, isDevMode, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserListComponent } from './pages/user-list/user-list.component';
import { HttpClientModule } from "@angular/common/http";
import { userReducer, whoamiReducer } from './stage/user/user.reducer';
import { UserEffect } from './stage/user/user.effect';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavElementComponent } from './component/sidenav/sidenav-element/sidenav-element.component'; 
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AppAuthGuard } from './guard/app.auth.guard';
import { LoginLogoutComponent } from './component/login-logout/login-logout.component';
import { AppAuthService } from './service/app.auth.service';
import { CustomAuthStorage } from './autoStorage';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserEditComponent } from './pages/user-edit/user-edit.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { GroupEffect } from './stage/group/group.effect';
import { groupReducer } from './stage/group/group.reducer';

export let AppInjector: Injector;

export const authConfig: AuthConfig = {
  issuer: 'https://sso.bbzbl-it.dev/realms/ILV',
  requireHttps: false,
  redirectUri: window.location.origin,
  postLogoutRedirectUri: window.location.origin,
  clientId: 'demoapp',
  scope: 'openid profile roles offline_access',
  responseType: 'code',
  showDebugInformation: true,
  requestAccessToken: true,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  silentRefreshTimeout: 500,
  clearHashAfterLogin: true,
};


export function storageFactory(): OAuthStorage {
  return new CustomAuthStorage();
}

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SidenavComponent,
    SidenavElementComponent,
    LoginLogoutComponent,
    UserEditComponent,
    GroupListComponent,
  ],
  imports: [
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true
      }
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({"users": userReducer, "currentUser" : whoamiReducer, "groups": groupReducer}, {}),
    EffectsModule.forRoot([UserEffect, GroupEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: AuthConfig,
      useValue: authConfig
    },
    {
      provide: OAuthStorage,
      useFactory: storageFactory
    },
    AppAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(authService: AppAuthService, private injector: Injector) {
    authService.initAuth().finally()
    AppInjector = injector;
  }
}
