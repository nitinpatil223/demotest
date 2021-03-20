import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManagementComponent } from './admin-management.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';

const routes: Routes = [
  {
    path: '', component:AdminManagementComponent
  },

  {
    path: 'add-admin', component: AddAdminComponent
  },
  {
    path: 'view-admin', component: ViewAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminManagementRoutingModule { }
