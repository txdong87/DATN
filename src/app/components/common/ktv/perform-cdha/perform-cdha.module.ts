import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam';
import { PerformCDHAComponent } from './perform-cdha.component';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [PerformCDHAComponent],
  imports: [
    CommonModule,
    WebcamModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextareaModule,
    FileUploadModule,
    BadgeModule
    
  ],
  exports:[
    PerformCDHAComponent,
    
  ]
})
export class PerformCdhaModule { }
