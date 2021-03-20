import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  showPasswordWrap = false;
  passwordCheckbox = false;

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  profileForm: FormGroup;

   //country dropdown s array

 countries = [{
  name: 'United State',
 },
 {
  name: 'India',
 }
 ];

  constructor( private fb: FormBuilder) {
  }

  ngOnInit() {
    this.profileForm = this.fb.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      organizationName:['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{1,}')]],
    });
  }

    //Phone mask inegration

    _keyPress(event: any) {
      const pattern = /[0-9]/;
      let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();

        }
      }

  toggleVisibility(e){
    this.showPasswordWrap= e.target.checked;
  }

}
