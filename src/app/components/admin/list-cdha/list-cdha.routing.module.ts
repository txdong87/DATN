import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListCDHAModule } from './list-cdha.module';
import { ListCDHAComponent } from './list-cdha.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ListCDHAComponent }
	])],
	exports: [RouterModule]
})
export class ListCDHARoutingModule { }
