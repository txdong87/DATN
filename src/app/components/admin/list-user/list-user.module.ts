import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ListUserComponent } from './list-user.component';
import { MTableModule } from 'src/app/shared/component/m-table/m-table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUserRoutingModule } from './list-user.routing.module';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [ListUserComponent],
  imports: [
    CommonModule,
    InputTextModule,
    InputNumberModule,
    DialogModule,
    InputSwitchModule,
    DialogModule,
    MTableModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    ListUserRoutingModule
  ]
})
export class ListUserModule { }
