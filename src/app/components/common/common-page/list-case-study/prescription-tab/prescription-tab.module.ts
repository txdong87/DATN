import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PrescriptionTabComponent } from './prescription-tab.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [PrescriptionTabComponent],
  imports: [
    CommonModule,
    TableModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    AutoCompleteModule,
    MenuModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule

  ],
  exports:[
    PrescriptionTabComponent
  ]
})
export class PrescriptionTabModule { }
