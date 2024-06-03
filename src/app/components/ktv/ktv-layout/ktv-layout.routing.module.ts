import { KTVLayoutModule } from './ktv-layout.module';

import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { KTVLayoutComponent } from './ktv-layout.component';


const routes: Routes = [
	{
	  path: '',
	  component: KTVLayoutComponent,
	  children: [
		{
		  path: 'page',
		  loadChildren: () =>
			import('../ktv-page/ktv-page.module').then((m) => m.KTVPageModule),
		  data: {
			pagename: 'KTV-page',
		  },
		
		},
	  ],
	},
  ];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class KTVLayoutRoutingModule { }
