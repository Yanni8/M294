import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from './app.roles';
import { AppAuthGuard } from './guard/app.auth.guard';
import { CallbackComponent } from './pages/callback/callback.component';
import { GroupEditComponent } from './pages/group-edit/group-edit.component';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SolutionDetailComponent } from './pages/solution-detail/solution-detail.component';
import { SolutionListComponent } from './pages/solution-list/solution-list.component';
import { SolveTestComponent } from './pages/solve-test/solve-test.component';
import { TestEditComponent } from './pages/test-edit/test-edit.component';
import { TestListComponent } from './pages/test-list/test-list.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent},
  { path: "user", pathMatch: "full", component: UserListComponent, canActivate: [AppAuthGuard], data: { roles: [Role.Admin] } },
  { path: "user/edit/:id", pathMatch: "full", component: UserEditComponent, canActivate: [AppAuthGuard], data: { roles: [Role.Admin] } },
  { path: "user/edit", pathMatch: "full", component: UserEditComponent, canActivate: [AppAuthGuard], data: { roles: [Role.Admin] } },
  { path: "group", pathMatch: "full", component: GroupListComponent, canActivate: [AppAuthGuard], data: { roles: [Role.Admin] } },
  { path: "group/edit", pathMatch: "full", component: GroupEditComponent, canActivate: [AppAuthGuard], data: { roles: [Role.Admin] } },
  { path: "group/edit/:id", pathMatch: "full", component: GroupEditComponent, canActivate: [AppAuthGuard], data: { roles: [Role.Admin] } },
  { path: "test", pathMatch: "full", component: TestListComponent, canActivate: [AppAuthGuard], data: { roles: [Role.User] } },
  { path: "test/administrator", pathMatch: "full", component: TestListComponent, canActivate: [AppAuthGuard], data: { roles: [Role.Admin] } },
  { path: "test/administrator/edit", pathMatch: "full", component: TestEditComponent, canActivate: [AppAuthGuard], data: { roles: [Role.Admin] } },
  { path: "test/solve/:id", pathMatch: "full", component: SolveTestComponent, canActivate: [AppAuthGuard], data: { roles: [Role.User] } },
  { path: "solution", pathMatch: "full", component: SolutionListComponent, canActivate: [AppAuthGuard], data: { roles: [Role.Admin] } },
  { path: "solution/details/:id", pathMatch: "full", component: SolutionDetailComponent, canActivate: [AppAuthGuard], data: { roles: [Role.Admin] } },
  { path: "callback", pathMatch: "full", component: CallbackComponent },
  { path: '**', pathMatch: "full", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
