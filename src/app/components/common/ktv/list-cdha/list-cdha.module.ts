import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { PatientTableModule } from '../../common-layout/patient-table/patient-table.module';
import { ListCDHAComponent } from 'src/app/components/admin/list-cdha/list-cdha.component';

@NgModule({
  declarations: [ListCDHAComponent],
  imports: [
    CommonModule,
    ContextMenuModule,
    CalendarModule,
    FormsModule,
    PatientTableModule
  ],
  exports: [
    ListCDHAComponent,
  ]
})
export class ListCDHAModule { }
