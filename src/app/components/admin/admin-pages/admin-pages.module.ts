import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPagesComponent } from './admin-pages.component';
import { AdminLayoutRoutingModule } from '../admin-layout/admin-layout-routing.module';
import { AdminPagesRoutingModule } from './admin-pages.routing.module';



@NgModule({
  declarations: [
    AdminPagesComponent
  ],
  imports: [
    CommonModule,
    AdminPagesRoutingModule
  ]
})
export class AdminPagesModule { }
