import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MTableModule } from 'src/app/shared/component/m-table/m-table.module';
import { ListCDHAComponent } from './list-cdha.component';
import { ButtonModule } from 'primeng/button';
import { ListCDHARoutingModule } from './list-cdha.routing.module';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [ListCDHAComponent],
  imports: [
    CommonModule,
    MTableModule,
    ButtonModule,
    ListCDHARoutingModule,
    InputSwitchModule,
    InputTextModule,
    CalendarModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ]
})
export class ListCDHAModule { }
