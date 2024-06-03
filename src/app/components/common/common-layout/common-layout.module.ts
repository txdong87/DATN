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
import { AddCaseStudyModule } from '../common-page/add-case-study/add-case-study.module';
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
    AddCaseStudyModule
    
    
  ],
  exports: []
})
export class CommonLayoutModule { }
