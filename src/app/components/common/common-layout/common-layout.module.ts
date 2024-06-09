import { AddPatientAndVisitModule } from './../common-page/add-patient-and-visit/add-patient-and-visit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutRoutingModule } from './common-layout.routing.module';
import { SplitterModule } from 'primeng/splitter';
import { AddPatientAndVisitComponent } from '../common-page/add-patient-and-visit/add-patient-and-visit.component';
import { CommonLayoutComponent } from './common-layout.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainWorkComponent } from '../common-page/main-work/main-work.component';
import { CommonPageModule } from '../common-page/common-page.module';
import { TabDataService } from 'src/app/services/base/tab-data.service';
import { TabView, TabViewModule } from 'primeng/tabview';
import { ListPatientModule } from '../common-page/list-patient/list-patient.module';
import { ListCaseStudyModule } from '../common-page/list-case-study/list-case-study.module';
import {  AddPatientModule } from '../common-page/add-patient/add-patient.module';
import { ListVisitModule } from '../common-page/list-visit/list-visit.module';
@NgModule({
  declarations: [
    CommonLayoutComponent,
  ],
  providers:[
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    CommonLayoutRoutingModule,
    SplitterModule,
    SidebarModule,
    ButtonModule,
    TabViewModule,
    ListCaseStudyModule,
    ListVisitModule,
    ListPatientModule,
    AddPatientModule,
    AddPatientAndVisitModule
    
    
  ],
  exports: []
})
export class CommonLayoutModule { }
