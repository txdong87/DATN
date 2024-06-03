import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { AuthGuard } from './shared/auth-guard.service';
// import { Roles } from './shared/constants/constants';
import { AppLayoutComponent } from "./components/admin/admin-layout/app.layout.component";
@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: 'login',
                    loadChildren: () =>
                        import('./components/login/login.module').then(
                            (m) => m.LoginModule
                        ),
                },
                {
                    path: 'admin',
                    loadChildren: () =>
                        import(
                           './components/admin/admin-layout/app.layout.module'
                        ).then((m) => m.AppLayoutModule),
                    // canActivate: [AuthGuard],
                    // data: { role: Roles.ADMIN },
                },
                {
                    path: '',
                    loadChildren: () =>
                        import(
                            './components/common/common-layout/common-layout.module'
                        ).then((m) => m.CommonLayoutModule),
                },
                {
                    path: 'ktv',
                    loadChildren: () =>
                        import(
                            './components/ktv/ktv-layout/ktv-layout.module'
                        ).then((m) => m.KTVLayoutModule),
                },
                { path: '**', redirectTo: '404' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
