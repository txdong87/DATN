import { CaseStudyDetailComponent } from './case-study-detail/case-study-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCaseStudyComponent } from './list-case-study.component';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CaseStudyTableComponent } from './case-study-table/case-study-table.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { SplitterModule } from 'primeng/splitter';
import { AngularSplitModule } from 'angular-split';
import { PatientTableModule } from '../patient-table/patient-table.module';
import { TabViewModule } from 'primeng/tabview';
import { CaseStudyInfoModule } from './case-study-info/case-study-info.module';
import { TabCDHAModule } from './tab-cdha/tab-cdha.module';
import { AddClsModule } from '../add-cls/add-cls.module';
import { CaseStudyDetailModule } from './case-study-detail/case-study-detail.module';
import { PrescriptionTabComponent } from './prescription-tab/prescription-tab.component';
import { PrescriptionTabModule } from './prescription-tab/prescription-tab.module';

@NgModule({
  declarations: [
    ListCaseStudyComponent,
    CaseStudyTableComponent,
  ],
  exports:[
    ListCaseStudyComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    RadioButtonModule,
    CalendarModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    TableModule,
    SplitterModule,
    TabViewModule,
    AngularSplitModule,
    PatientTableModule,
    CaseStudyInfoModule,
    TabCDHAModule,
    AngularSplitModule,
    CaseStudyDetailModule,
    PrescriptionTabModule
  ]
})
export class ListCaseStudyModule { }
