import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MTableModule } from 'src/app/shared/component/m-table/m-table.module';
import { ListCDHAComponent } from './list-cdha.component';
import { ButtonModule } from 'primeng/button';
import { ListCDHARoutingModule } from './list-cdha.routing.module';



@NgModule({
  declarations: [ListCDHAComponent],
  imports: [
    CommonModule,
    MTableModule,
    ButtonModule,
    ListCDHARoutingModule
  ]
})
export class ListCDHAModule { }
