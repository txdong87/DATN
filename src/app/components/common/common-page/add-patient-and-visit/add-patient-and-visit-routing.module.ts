import { AddPatientAndVisitModule } from './add-patient-and-visit.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddPatientAndVisitComponent } from './add-patient-and-visit.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AddPatientAndVisitComponent }
	])],
	exports: [RouterModule]
})
export class AddPatientAndVisitRoutingModule { }
