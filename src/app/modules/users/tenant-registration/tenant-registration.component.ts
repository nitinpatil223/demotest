import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { SearchCountryField, TooltipLabel, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { CustomDateParserFormatter } from 'src/app/services/datepicker-adapter';

@Component({
  selector: 'app-tenant-registration',
  templateUrl: './tenant-registration.component.html',
  styleUrls: ['./tenant-registration.component.scss']
})
export class TenantRegistrationComponent implements OnInit {

  model: NgbDateStruct;

  constructor(
    @Inject(DOCUMENT) private document: Document,
   private fb: FormBuilder,
   private ngbCalendar: NgbCalendar,
   private dateAdapter: NgbDateAdapter<string>
   ) { }

  ngOnInit(): void {
    this.document.body.classList.add('login-page-body', 'registration-page');
  }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
      this.document.body.classList.remove('login-page-body', 'registration-page');
    }

}
