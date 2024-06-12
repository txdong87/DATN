import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMedicationComponent } from './list-medication.component';
import { ListMedicationRoutingModule } from './list-medication.routing.module';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [ListMedicationComponent],
  imports: [
    CommonModule,
    InputSwitchModule,
    InputTextModule,
    DialogModule,
    ListMedicationRoutingModule
  ]
})
export class ListMedicationModule { }
