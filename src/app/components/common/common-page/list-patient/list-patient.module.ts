import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPatientComponent } from './list-patient.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { PatientTableModule } from '../patient-table/patient-table.module';

@NgModule({
  declarations: [ListPatientComponent],
  imports: [
    CommonModule,
    ContextMenuModule,
    CalendarModule,
    FormsModule,
    PatientTableModule
  ],
  exports: [
    ListPatientComponent,
  ]
})
export class ListPatientModule { }
