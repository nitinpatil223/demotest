import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
//import { AuthGuard } from './auth.guard';
//import { PageNotFoundComponent } from '../app/shared/global-components/page-not-found/page-not-found.component';
//import { PageForbiddenComponent } from '../app/shared/global-components/page-forbidden/page-forbidden.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/users/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./modules/users/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },

  {
    path: 'reset-password',
    loadChildren: () => import('./modules/users/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./modules/users/profile/profile.module').then(m => m.ProfileModule),
    //canActivate: [AuthGuard],
    data: { preload: true, ExpectedModuleName: 'Profile', state: 'profile' },
  },
  {
    path: 'tenant-registration',
    loadChildren: () => import('./modules/users/tenant-registration/tenant-registration.module').then(m => m.TenantRegistrationModule),
    //canActivate: [AuthGuard],
    data: { preload: true, ExpectedModuleName: 'Tenant', state: 'tenant' },
  },
  {
    path: 'admin-management',
    loadChildren: () => import('./modules/admin-management/admin-management.module').then(m => m.AdminManagementModule),
    data: { preload: true, ExpectedModuleName: 'AdminManagement', state: 'admin-management' },
  },


  {
    path: '',
    redirectTo: '/tenant-registration',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true,
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
