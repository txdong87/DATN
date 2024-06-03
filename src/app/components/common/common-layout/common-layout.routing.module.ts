import { CommonPageModule } from './../common-page/common-page.module';
import { AddPatientAndVisitModule } from '../common-page/add-patient-and-visit/add-patient-and-visit.module';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonLayoutComponent } from './common-layout.component';

const routes: Routes = [
	{
	  path: '',
	  redirectTo: 'common/page',
	  pathMatch: 'full',
	},
	{
	  path: 'common',
	  component: CommonLayoutComponent,
	  children: [
		{
		  path: 'page',
		  loadChildren: () =>
			import('../common-page/common-page.module').then((m) => m.CommonPageModule),
		  data: {
			pagename: 'list_visit',
			// Code:'',
			// TimeType:'-1'
		  },
		
		},
	  ],
	},
  ];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CommonLayoutRoutingModule { }
