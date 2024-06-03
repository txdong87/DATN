import { ListCaseStudyModule } from './list-case-study/list-case-study.module';
import { NgModule } from '@angular/core';
import {AngularSplitModule} from 'angular-split';
import { ListVisitComponent } from './list-visit/list-visit.component';
import { MainWorkComponent } from './main-work/main-work.component';
import { CommonModule } from '@angular/common';
import { CommonPageRoutingModule } from './common-page.routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { FormControlDirective,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TabDataService } from 'src/app/services/base/tab-data.service';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ListCaseStudyComponent } from './list-case-study/list-case-study.component';
import { PanelModule } from 'primeng/panel';
import { CaseStudyDetailComponent } from './list-case-study/case-study-detail/case-study-detail.component';
import { MenuModule } from 'primeng/menu';
import { ListPatientModule } from './list-patient/list-patient.module';
import { AddCaseStudyModule } from './add-case-study/add-case-study.module';
import { ListVisitModule } from './list-visit/list-visit.module';

@NgModule({
  declarations: [
    MainWorkComponent,
  ],
  exports:[
  ],
  imports: [
    ListVisitModule,
    ListCaseStudyModule,
    ListPatientModule,
    AddCaseStudyModule,
    AngularSplitModule,
    CommonPageRoutingModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    ContextMenuModule,
    TableModule,
    RadioButtonModule,
    PanelModule,
    MenuModule,
    
    
  ],
  providers:[]
})
export class CommonPageModule { }
