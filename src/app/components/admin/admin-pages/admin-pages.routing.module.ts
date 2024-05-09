import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminPagesComponent } from './admin-pages.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AdminPagesComponent }
	])],
	exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
