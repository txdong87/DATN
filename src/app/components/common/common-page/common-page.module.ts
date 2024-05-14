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
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TabDataService } from 'src/app/services/base/tab-data.service';
import { AddCaseStudyComponent } from './add-case-study/add-case-study.component';
@NgModule({
  declarations: [
    ListVisitComponent,
    MainWorkComponent,
    AddCaseStudyComponent
  ],
  exports:[
    ListVisitComponent,
    MainWorkComponent,
    AddCaseStudyComponent
  ],
  imports: [
    CommonModule,
    AngularSplitModule,
    CommonPageRoutingModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule,
    DialogModule,
    TableModule,
    ReactiveFormsModule
    
    
  ],
  providers:[]
})
export class CommonPageModule { }
