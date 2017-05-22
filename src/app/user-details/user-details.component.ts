import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {UserDetailsCanDeactivateGuard} from "../can-deactivate.guard";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap/modal/modal";
import {Validators} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @ViewChild("discardModal") discardModal;
  user = {
    name: 'John',
    surName: 'Doe'
  };

  userForm : FormGroup;
  discardModalFlag = true;
  discardModalRef;

  constructor(private router : Router,
              private formBuilder : FormBuilder,
              private userDetailsCanDeactivateGuard : UserDetailsCanDeactivateGuard,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.userForm = this.buildUserForm();
  }

  openDiscardModal() {
    this.discardModalRef = this.modalService.open(this.discardModal);
    this.discardModalRef.result.then(
      () => this.userDetailsCanDeactivateGuard.keep(), // close modal callback
      () => this.userDetailsCanDeactivateGuard.keep()  // dismiss modal callback
    );
  }

  discardChanges() : void {
    this.userDetailsCanDeactivateGuard.discard();
    this.discardModalRef.close();
  }

  backToList() : Promise<boolean> {
    return this.router.navigate(['/users']);
  }

  save() : void {
    this.discardModalFlag = false;
    this.backToList();
  }

  private buildUserForm() : FormGroup {
    return this.formBuilder.group({
      name: [this.user.name, [ Validators.required ]],
      surName: [this.user.surName, [ Validators.required ]]
    });
  }
}
