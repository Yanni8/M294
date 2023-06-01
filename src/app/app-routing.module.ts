import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupEditComponent } from './pages/group-edit/group-edit.component';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { TestEditComponent } from './pages/test-edit/test-edit.component';
import { TestListComponent } from './pages/test-list/test-list.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {path: "user", pathMatch: "full", component: UserListComponent},
  {path: "user/edit/:id", pathMatch: "full", component: UserEditComponent},
  {path: "user/edit", pathMatch: "full", component: UserEditComponent},
  {path: "group", pathMatch: "full", component: GroupListComponent },
  {path: "group/edit", pathMatch: "full", component: GroupEditComponent},
  {path: "group/edit/:id", pathMatch: "full", component: GroupEditComponent},
  {path: "test", pathMatch: "full", component: TestListComponent},
  {path: "test/administrator", pathMatch: "full", component: TestListComponent},
  {path: "test/administrator/edit", pathMatch: "full", component: TestEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
