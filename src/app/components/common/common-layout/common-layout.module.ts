import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutRoutingModule } from './common-layout.routing.module';
import { SplitterModule } from 'primeng/splitter';
import { CommonLayoutComponent } from './common-layout.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabDataService } from 'src/app/services/base/tab-data.service';
import { TabView, TabViewModule } from 'primeng/tabview';

import { DoctorModule } from '../doctor/doctor.module';
import { NotificationModule } from 'src/app/shared/component/notification/notification.module';
import { MainNurseModule } from '../main-nurse/main-nurse.module';
import { KTVModule } from '../ktv/ktv.module';
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
    DoctorModule,
    MainNurseModule,
    KTVModule,
    NotificationModule
    
  ],
  exports: []
})
export class CommonLayoutModule { }
