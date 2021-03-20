
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  forgotPassword = false;
  loginForm = true;
  signinFrom: FormGroup;
  forgotPasswordFrom: FormGroup;

  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private modalService: NgbModal) {
    this.createForm();
  }

  createForm() {
    this.signinFrom = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

// add class to page body

  ngOnInit() {
    this.document.body.classList.add('login-page-body');
    this.forgotPasswordFrom = this.fb.group ({
      email: ['', [Validators.required, Validators.email,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{1,}')]],
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.document.body.classList.remove('login-page-body');
  }

  openForgotPassword() {
this.forgotPassword = !this.forgotPassword;
this.loginForm = !this.loginForm
  }

  openLogin() {
    this.loginForm = !this.loginForm;
    this.forgotPassword = !this.forgotPassword
  }

}

