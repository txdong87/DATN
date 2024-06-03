import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam';
import { PerformCDHAComponent } from './perform-cdha.component';



@NgModule({
  declarations: [PerformCDHAComponent],
  imports: [
    CommonModule,
    WebcamModule
  ],
  exports:[
    PerformCDHAComponent,
  ]
})
export class PerformCdhaModule { }
