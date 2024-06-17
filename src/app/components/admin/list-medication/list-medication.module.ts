import { MTableModule } from 'src/app/shared/component/m-table/m-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMedicationComponent } from './list-medication.component';
import { ListMedicationRoutingModule } from './list-medication.routing.module';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [ListMedicationComponent],
  imports: [
    CommonModule,
    InputSwitchModule,
    InputTextModule,
    DialogModule,
    ListMedicationRoutingModule,
    MTableModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ]
})
export class ListMedicationModule { }
