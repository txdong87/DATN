import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientAndVisitRoutingModule } from './add-patient-and-visit-routing.module';
import { AddPatientAndVisitComponent } from './add-patient-and-visit.component';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AddPatientAndVisitComponent
  ],
  imports: [
    CommonModule,
    AddPatientAndVisitRoutingModule,
    SplitterModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule
  ],
  exports:[
    AddPatientAndVisitComponent
  ]
})
export class AddPatientAndVisitModule { }
