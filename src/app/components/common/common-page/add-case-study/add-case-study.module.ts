import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCaseStudyComponent } from './add-case-study.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [AddCaseStudyComponent],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule 
  ],
  exports:[
    AddCaseStudyComponent
  ]
})
export class AddCaseStudyModule { }
