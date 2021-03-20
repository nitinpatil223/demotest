import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TenantRegistrationRoutingModule } from './tenant-registration-routing.module';
import { TenantRegistrationComponent } from './tenant-registration.component';


@NgModule({
  declarations: [TenantRegistrationComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    TenantRegistrationRoutingModule
  ]
})
export class TenantRegistrationModule { }
