import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeSelectComponent } from './component/tree-select/tree-select.component';



@NgModule({
  declarations: [TreeSelectComponent],
  imports: [
    CommonModule
  ],
  exports: [TreeSelectComponent]
})
export class SharedModule { }
