import { Component, OnInit, Inject, OnDestroy, Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { SearchCountryField, TooltipLabel, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { CustomDateParserFormatter } from 'src/app/services/datepicker-adapter';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',

  providers: [
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class AddAdminComponent implements OnInit {

  active = 1;

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  //country dropdown s array

 countries = [{
  name: 'United State',
 },
 {
  name: 'India',
 }
 ];

 //subscription history array
  subscriptions = [
    {
      subscribedDate: '02/02/2020',
      renewalDate: '05/05/2020',
      subscribedAmount: '$20',
      subscriptionStatus:'Active',
    },

    {
      subscribedDate: '02/02/2020',
      renewalDate: '05/05/2020',
      subscribedAmount: '$20',
      subscriptionStatus:'Expired',
    },
    {
      subscribedDate: '02/02/2020',
      renewalDate: '05/05/2020',
      subscribedAmount: '$20',
      subscriptionStatus:'Expired',
    },
  ];

   //payments history array
   payments = [
    {
      transactionId: '123456783',
      paymentDate: '05/05/2020',
      paymentMethod: 'Apple Pay',
      paymentStatus:'Success',
      amount: '$10',
    },
    {
      transactionId: '123456782',
      paymentDate: '03/02/2020',
      paymentMethod: 'Credit Card',
      paymentStatus:'Success',
      amount: '$20',
    },

    {
      transactionId: '6556782',
      paymentDate: '04/04/2020',
      paymentMethod: 'Apple Pay',
      paymentStatus:'Success',
      amount: '$20',
    },
  ];

    //facility array
    facilities = [
      {
        facilityName: 'SGX Mall',
        assessorName: 'Mr. Kevin Jo',
        assessment: '3',
        paymentStatus:'Success',
      },

      {
        facilityName: 'Pink House',
        assessorName: 'Mr. Peter Jo',
        assessment: '2',
        paymentStatus:'Success',
      },
      {
        facilityName: 'Green Park',
        assessorName: 'Mr. Sam Jo',
        assessment: '4',
        paymentStatus:'Success',
      },
    ];


     //facility array
     assessments = [
      {
        facilityName: 'SGX Mall',
        assessorName: 'Mr. Kevin Jo',
        assessment: '3',
        completionDate:'01/01/2020',
        score:'48.25%',
      },

      {
        facilityName: 'Pink House',
        assessorName: 'Mr. Peter Jo',
        assessment: '2',
        completionDate:'01/01/2020',
        score:'40.50%',
      },
      {
        facilityName: 'Green Park',
        assessorName: 'Mr. Sam Jo',
        assessment: '4',
        completionDate:'01/01/2020',
        score:'82.50%',
      },
    ];

   //status dropdown s array

  statust = [{
    status: 'Active',
   },
   {
    status: 'Deactive',
   }
   ];

   addUsersForm: FormGroup;
   model: NgbDateStruct;

  constructor(
    private fb: FormBuilder,
    private ngbCalendar: NgbCalendar,
    private location: Location,
    private dateAdapter: NgbDateAdapter<string>) {
  }

  ngOnInit() {
    this.addUsersForm = this.fb.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      phone:[''],
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

    // onclick last page open

    back(): void {
      this.location.back()
    }

}


