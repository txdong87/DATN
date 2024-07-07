// Trong file ktv-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KTVComponent } from './ktv.component';
import { CdhaActiveComponent } from './cdha-active/cdha-active.component';
import { PerformCDHAComponent } from './perform-cdha/perform-cdha.component';

const routes: Routes = [
  {
    path: '',
    component: KTVComponent,
    children: [
      { path: 'perform-cdha', component: PerformCDHAComponent },
      { path: 'cdha-active', component: CdhaActiveComponent },
      { path: '', redirectTo: 'cdha-active', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KTVRoutingModule {}
