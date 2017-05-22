import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {CanDeactivate} from "@angular/router";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {Subject, Observable} from "rxjs/Rx";

@Injectable()
export class UserDetailsCanDeactivateGuard implements CanDeactivate<UserDetailsComponent> {

  private discardSubject : Subject<boolean> = new Subject<boolean>();

  discard() : void {
    this.discardSubject.next(true);
  }

  keep() : void {
    this.discardSubject.next(false);
  }

  canDeactivate(component : UserDetailsComponent,
                currentRoute : ActivatedRouteSnapshot,
                currentState : RouterStateSnapshot) : Promise<boolean> | Observable<boolean> | boolean {

    if (component.userForm.dirty && component.discardModalFlag) {
      component.openDiscardModal();
      return this.discardSubject.asObservable().first();
    }

    return true;
  }
}
