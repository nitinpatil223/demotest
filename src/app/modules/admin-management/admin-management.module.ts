import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmModalService } from './../../services/confirm-modal.service';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminManagementRoutingModule } from './admin-management-routing.module';
import { AdminManagementComponent } from './admin-management.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ViewAdminComponent } from './view-admin/view-admin.component';



@NgModule({
  declarations: [AdminManagementComponent, AddAdminComponent, ViewAdminComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    AdminManagementRoutingModule
  ],
  providers: [ ConfirmModalService ]
})
export class AdminManagementModule { }
