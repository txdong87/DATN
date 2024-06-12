import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-medication',
  templateUrl: './list-medication.component.html',
  styleUrl: './list-medication.component.css'
})
export class ListMedicationComponent {
  rows: any = [];
  total = 0;
  loading = false;
  cols: any[] = [];
  url: any;
  msg = '';
  formGroup: FormGroup;
  selectedItem: any;
  selectedImg: string = '';
  bannersDialogHeader = '';
  visibleImage: boolean = false;
  visibleDialog: boolean = false;

  searchData:any = {
    name: '',
    take: 40,
    skip: 0
  };
  constructor( private fb: FormBuilder){
    this.formGroup = this.fb.group({
      id: [null],
      type: [null],
      name: [null],
      nameEn: [null],
      description: [null],
      descriptionEn: [null],
      order: [null],
      enable: true,
    });
  }
}
