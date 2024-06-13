import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AuthGuard } from 'src/app/shared/auth-guard.service';
// import { Roles } from 'src/app/shared/constants/constants';
import { AppLayoutComponent } from './app.layout.component';
import { AdminPagesComponent } from '../admin-pages/admin-pages.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppLayoutComponent,
        children: [
          {
            path: 'pages',
            loadChildren: () => import('../admin-pages/admin-pages.module').then((m) => m.AdminPagesModule),
          },
          {
            path: 'list-user',
            loadChildren: () => import('../list-user/list-user.module').then((m) => m.ListUserModule),
          },
          {
            path: 'list-cdha',
            loadChildren: () => import('../list-cdha/list-cdha.module').then((m) => m.ListCDHAModule),
          }
          {
            path: 'admin-dashboard',
            loadChildren: () => import('../list-medication/list-medication.module').then((m) => m.ListMedicationModule),
          },
         
        ],
      },
      {
        path: 'page', // Route cho admin/pages
        component: AdminPagesComponent, // Component để hiển thị
      }
    ]),
  ],
  exports: [RouterModule],
})
export class AdminLayoutRoutingModule {}
