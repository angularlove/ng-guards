import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserDetailsCanDeactivateGuard} from "./can-deactivate.guard";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  {
    path: 'users/:12',
    component: UserDetailsComponent,
    canDeactivate: [UserDetailsCanDeactivateGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
