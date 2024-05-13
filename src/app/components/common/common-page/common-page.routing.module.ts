import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from '../common-layout/common-layout.component';
import { ListVisitComponent } from './list-visit/list-visit.component';
const routes: Routes = [
    {
      path: '',
      component: ListVisitComponent,
    },
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CommonPageRoutingModule {}
  