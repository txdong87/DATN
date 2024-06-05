import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam';
import { PerformCDHAComponent } from './perform-cdha.component';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [PerformCDHAComponent],
  imports: [
    CommonModule,
    WebcamModule,
    ReactiveFormsModule,
    FormsModule,
 
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule
    
  ],
  exports:[
    PerformCDHAComponent,
    
  ]
})
export class PerformCdhaModule { }
