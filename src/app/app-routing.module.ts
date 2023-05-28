import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {path: "user", pathMatch: "full", component: UserListComponent},
  {path: "user/edit/:id", pathMatch: "full", component: UserEditComponent},
  {path: "user/edit", pathMatch: "full", component: UserEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
