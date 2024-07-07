import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { MessagesModule } from 'primeng/messages';
import { MainNurseComponent } from './main-nurse.component';
import { MTableModule } from 'src/app/shared/component/m-table/m-table.module';


@NgModule({
  declarations: [MainNurseComponent],
  imports: [
    CommonModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSplitModule,
    InputTextModule,
    TabViewModule,
    MessagesModule ,
    MTableModule
    
  ],
  exports:[
    MainNurseComponent
  ]
})
export class MainNurseModule { }
