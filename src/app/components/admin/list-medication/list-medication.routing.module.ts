import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListMedicationComponent } from './list-medication.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ListMedicationComponent }
	])],
	exports: [RouterModule]
})
export class ListMedicationRoutingModule { }
