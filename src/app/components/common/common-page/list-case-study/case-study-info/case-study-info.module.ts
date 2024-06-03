import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudyInfoComponent } from './case-study-info.component';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [CaseStudyInfoComponent],
  imports: [
    CommonModule,
    PanelModule
  ],
  exports:[
    CaseStudyInfoComponent,
    
  ]
})
export class CaseStudyInfoModule { }
