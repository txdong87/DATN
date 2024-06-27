import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { PatientTableModule } from '../../common-layout/patient-table/patient-table.module';
import { TableModule } from 'primeng/table';
import { CdhaActiveComponent } from './cdha-active.component';
import { MTableModule } from 'src/app/shared/component/m-table/m-table.module';

@NgModule({
  declarations: [CdhaActiveComponent],
  imports: [
    CommonModule,
    ContextMenuModule,
    CalendarModule,
    TableModule,
    FormsModule,
    PatientTableModule,
    MTableModule
  ],
  exports: [
    CdhaActiveComponent,
  ]
})
export class CdhaActiveModule { }
