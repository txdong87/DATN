import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudyDetailComponent } from './case-study-detail.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { AddClsModule } from '../../add-cls/add-cls.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [CaseStudyDetailComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    TableModule,
    AddClsModule,
    InputTextModule,
    ButtonModule
  ],
  exports:[CaseStudyDetailComponent]
})
export class CaseStudyDetailModule { }
