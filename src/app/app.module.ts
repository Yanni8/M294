import { NgModule, isDevMode, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserListComponent } from './pages/user-list/user-list.component';
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { userReducer, whoamiReducer } from './stage/user/user.reducer';
import { UserEffect } from './stage/user/user.effect';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavElementComponent } from './component/sidenav/sidenav-element/sidenav-element.component';
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AppAuthGuard } from './guard/app.auth.guard';
import { LoginLogoutComponent } from './component/login-logout/login-logout.component';
import { AppAuthService } from './service/app.auth.service';
import { CustomAuthStorage } from './autoStorage';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { GroupEffect } from './stage/group/group.effect';
import { groupReducer } from './stage/group/group.reducer';
import { AddUserPopupComponent } from './component/group/add-user-popup/add-user-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { GroupEditComponent } from './pages/group-edit/group-edit.component';
import { TestListComponent } from './pages/test-list/test-list.component';
import { TestEffect } from './stage/test/test.effect';
import { testReducer } from './stage/test/test.reducer';
import { TestEditComponent } from './pages/test-edit/test-edit.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddUserOrGroupPopupComponent } from './component/test/add-user-or-group-popup/add-user-or-group-popup.component';
import { SolveTestComponent } from './pages/solve-test/solve-test.component';
import { SolutionEffect } from './stage/solution/solution.effect';
import { AppIsInRolesDirective } from './directives/is-in-roles.dir';
import { SolutionListComponent } from './pages/solution-list/solution-list.component';
import { solutuionReducer } from './stage/solution/solution.reducer';
import { SolutionDetailComponent } from './pages/solution-detail/solution-detail.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CallbackComponent } from './pages/callback/callback.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { notificationReducer } from './stage/notification/notification.reducer';

export let AppInjector: Injector;

export const authConfig: AuthConfig = {
  issuer: 'https://sso.bbzbl-it.dev/realms/ILV',
  requireHttps: false,
  redirectUri: window.location.origin + "/callback",
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
    AddUserPopupComponent,
    GroupEditComponent,
    TestListComponent,
    TestEditComponent,
    AddUserOrGroupPopupComponent,
    SolveTestComponent,
    AppIsInRolesDirective,
    SolutionListComponent,
    SolutionDetailComponent,
    CallbackComponent,
    NotfoundComponent,
    HomeComponent,
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
    StoreModule.forRoot({ "users": userReducer, "currentUser": whoamiReducer, "groups": groupReducer, "tests": testReducer, "solutions": solutuionReducer, "notifications": notificationReducer }, {}),
    EffectsModule.forRoot([UserEffect, GroupEffect, TestEffect, SolutionEffect]),
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
    MatDialogModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
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
