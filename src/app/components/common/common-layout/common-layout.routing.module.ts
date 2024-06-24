
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonLayoutComponent } from './common-layout.component';

const routes: Routes = [
	{
	  path: '',
	  component: CommonLayoutComponent,
	  children: [
		{
		  path: 'doctor',
		  loadChildren: () =>
			import('../doctor/doctor.module').then((m) => m.DoctorModule),
		},
		{
			path: 'main-nurse',
			loadChildren: () =>
			  import('../main-nurse/main-nurse.module').then((m) => m.MainNurseModule),
		},
		{
			path: 'ktv',
			loadChildren: () =>
			  import('../ktv/ktv.module').then((m) => m.KTVModule),
		},
	  ],
	},
  ];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CommonLayoutRoutingModule { }
