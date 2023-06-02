import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupEditComponent } from './pages/group-edit/group-edit.component';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { SolutionDetailComponent } from './pages/solution-detail/solution-detail.component';
import { SolutionListComponent } from './pages/solution-list/solution-list.component';
import { SolveTestComponent } from './pages/solve-test/solve-test.component';
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
  {path: "test/solve/:id", pathMatch: "full", component: SolveTestComponent},
  {path: "solution", pathMatch: "full", component: SolutionListComponent},
  {path: "solution/details/:id", pathMatch: "full", component: SolutionDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
