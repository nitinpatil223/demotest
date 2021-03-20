

import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;

  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder) {
  }

// add class to login page body

  ngOnInit() {
    this.document.body.classList.add('login-page-body');

    this.resetPasswordForm = this.fb.group ({
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.document.body.classList.remove('login-page-body');
  }


}

