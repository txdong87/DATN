import { CommonPageModule } from './../common-page/common-page.module';
import { AddPatientAndVisitModule } from '../common-page/add-patient-and-visit/add-patient-and-visit.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLayoutComponent } from './common-layout.component';

@NgModule({
	imports: [
		RouterModule.forChild([
		{
			path: '',
			children: [
				{
				  path: 'main-work',
				  loadChildren:()=> import('../common-page/common-page.module').then((m)=>m.CommonPageModule),
				},
			]
		}
	])],
	exports: [RouterModule]
})
export class CommonLayoutRoutingModule { }
