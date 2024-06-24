import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabCDHAComponent } from './tab-cdha.component';



@NgModule({
  declarations: [TabCDHAComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TabCDHAComponent
  ]
})
export class TabCDHAModule { }
