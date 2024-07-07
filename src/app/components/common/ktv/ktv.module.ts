// ktv.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KTVComponent } from './ktv.component';
import { PerformCdhaModule } from "./perform-cdha/perform-cdha.module";
import { ContextMenuModule } from 'primeng/contextmenu';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { PatientTableModule } from '../common-layout/patient-table/patient-table.module';
import { CdhaActiveModule } from './cdha-active/cdha-active.module';
import { KTVRoutingModule } from './ktv.routing.module';
import { DataSharingService } from 'src/app/shared/data-sharing.service';

@NgModule({
    declarations: [KTVComponent],
    imports: [
        CommonModule,
        PerformCdhaModule,
        ContextMenuModule,
        CalendarModule,
        FormsModule,
        PatientTableModule,
        CdhaActiveModule,
        KTVRoutingModule
    ],
    exports: [
        KTVComponent
    ],
})
export class KTVModule { }
