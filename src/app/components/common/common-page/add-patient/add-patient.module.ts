import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AddPatientComponent } from './add-patient.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [AddPatientComponent],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule
  ],
  exports:[
    AddPatientComponent
  ]
})
export class AddPatientModule { }
