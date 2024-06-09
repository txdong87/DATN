import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Constants } from 'src/app/constant/constants';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {
  GENDERS = Constants.GENDERS;
  patientForm: FormGroup;
  vitalSignCollapse = false;
  patients: any[] = []
  @Output() patientAdded = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.patientForm = this.fb.group({
      id: [null],
      patientCode: [null, [Validators.required]],
      patientName: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      phone: [null],
      address: [null],
    });
  }
  getListPatient() {
    this.patientService.getPatients().subscribe({
      next: (res) => {
        this.patients = res;
        console.log(this.patients)
      }
    })
  }
  addPatient(){
    this.patientService.create({ ...this.patientForm.value}).subscribe({
      next: (res) => {
this.patientAdded.emit(res);
    }
    })
  }


}
