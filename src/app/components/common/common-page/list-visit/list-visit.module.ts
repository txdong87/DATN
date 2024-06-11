import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVisitComponent } from './list-visit.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [ListVisitComponent],
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
    MessagesModule 
    
  ],
  exports:[
    ListVisitComponent
  ]
})
export class ListVisitModule { }
