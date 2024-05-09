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
