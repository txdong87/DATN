import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientTableComponent } from './patient-table.component';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';



@NgModule({
  declarations: [PatientTableComponent],
  imports: [
    CommonModule,
    TableModule,
    ContextMenuModule

  ],
  exports: [
    PatientTableComponent,
  ]
})
export class PatientTableModule { }
