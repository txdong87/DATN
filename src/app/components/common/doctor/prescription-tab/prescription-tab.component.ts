import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-prescription-tab',
  templateUrl: './prescription-tab.component.html',
  styleUrl: './prescription-tab.component.css'
})
export class PrescriptionTabComponent {
  options = [
    { label: '1 tuần', value: 1, valueCalc: 1 },
    { label: '2 tuần', value: 2, valueCalc: 2 },
    { label: '1 tháng', value: 3, valueCalc: 1 },
    { label: '2 tháng', value: 4, valueCalc: 2 },
    { label: '3 tháng', value: 5, valueCalc: 3 },
    { label: '6 tháng', value: 6, valueCalc: 6 },
    { label: '12 tháng', value: 7, valueCalc: 12 },
  ];

  formMedication: FormGroup;
  prescriptionNoteFG:FormGroup;
  prescription: any = null;
  validError = false;
  callbackSearchFn: any;
  canEditPrescription = false;
  selectedMedication: any;  
  listMedicationTable:any;
  doctorComment = '';
  isShowFormMedication = false;
  constructor( private formBuilder: FormBuilder,){
  this.formMedication = this.formBuilder.group({
    id: ['', [Validators.required]],
    medicationName: ['', [Validators.required]],
    amount: ['', [Validators.required, Validators.min(1)]],
    unit: ['', [Validators.required]],
    text: ['', [Validators.required]],
    isFunctionalFoods: [false],
    price: [''],
    existingAmount: [0],
    content:['']
  });
  this.prescriptionNoteFG = this.formBuilder.group({
    reExaminationDate: [null],
    visitAgainAfter: [null],
  });
  }
  get formMedicationData() {
    return this.formMedication.controls;
  }
  get prescriptionNoteFormData() {
    return this.prescriptionNoteFG.controls;
  }
  showFormMedication(isShow:any) {
    this.resetPopup();
    this.isShowFormMedication = isShow;
    this.validError = false;
  }
  resetPopup() {
    // this.formMedication.reset(this.defaultMedicationFormValue);
    // this.selectedMedication = null;

    // this.addElseUpdate = true;
    // this.validError = false;
    // this.selectedRow = -1;
  }
  doctorCommentChange(){

  }
  removePrescription(){

  }
  printPrescription2(){

  }
  export(){

  }
  reExaminationDateChange(event:any){

  }
  visitAgainAfterChange(event:any){

  }
  editMedication(id:any){

  }
  removeMedication(id:any){

  }
}
