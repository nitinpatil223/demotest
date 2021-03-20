import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder) {
  }

// add class to login page body

  ngOnInit() {
    this.document.body.classList.add('login-page-body');

    this.forgotPasswordForm = this.fb.group ({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{1,}')]],
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.document.body.classList.remove('login-page-body');
  }


}
