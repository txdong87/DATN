import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientAndVisitRoutingModule } from './add-patient-and-visit-routing.module';
import { AddPatientAndVisitComponent } from './add-patient-and-visit.component';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AddPatientAndVisitComponent
  ],
  imports: [
    CommonModule,
    AddPatientAndVisitRoutingModule,
    SplitterModule,
    TabViewModule
  ],
  exports:[
    AddPatientAndVisitComponent
  ]
})
export class AddPatientAndVisitModule { }
