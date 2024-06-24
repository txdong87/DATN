import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { AddClsComponent } from './add-cls.component';
import { Footer } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [AddClsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[AddClsComponent]
})
export class AddClsModule { }
