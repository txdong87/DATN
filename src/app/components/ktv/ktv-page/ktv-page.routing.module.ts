import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformCDHAComponent } from './perform-cdha/perform-cdha.component';
const routes: Routes = [
    {
      path: '',
      component: PerformCDHAComponent,
    },
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class KTVPageRoutingModule {}
  