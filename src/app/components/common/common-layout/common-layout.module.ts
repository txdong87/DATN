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
import { TabViewModule } from 'primeng/tabview';
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
    CommonPageModule,
    TabViewModule,
    ButtonModule,
    
  ],
  exports: []
})
export class CommonLayoutModule { }
