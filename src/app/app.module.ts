import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UserDetailsCanDeactivateGuard} from "./can-deactivate.guard";
import {AppRoutingModule} from "./app.routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap/index";
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [UserDetailsCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
