import { NgModule } from '@angular/core';
import {AngularSplitModule} from 'angular-split';
import { ListVisitComponent } from './list-visit/list-visit.component';
import { MainWorkComponent } from './main-work/main-work.component';
import { CommonModule } from '@angular/common';
import { CommonPageRoutingModule } from './common-page.routing.module';
@NgModule({
  declarations: [
    ListVisitComponent,
    MainWorkComponent
  ],
  imports: [
    CommonModule,
    AngularSplitModule,
    CommonPageRoutingModule
  ]
})
export class CommonPageModule { }
