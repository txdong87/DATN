import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KTVLayoutRoutingModule } from './ktv-layout.routing.module';
import { KTVPageModule } from '../ktv-page/ktv-page.module';
import { KTVLayoutComponent } from './ktv-layout.component';
import { PerformCdhaModule } from "../ktv-page/perform-cdha/perform-cdha.module";



@NgModule({
    declarations: [KTVLayoutComponent],
    imports: [
        CommonModule,
        KTVLayoutRoutingModule,
        KTVPageModule,
        PerformCdhaModule
    ]
})
export class KTVLayoutModule { }
