import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Constants } from 'src/app/constant/constants';
@Component({
  selector: 'app-add-patient-and-visit',
  templateUrl: './add-patient-and-visit.component.html',
  styleUrl: './add-patient-and-visit.component.css'
})
export class AddPatientAndVisitComponent {
  GENDERS = Constants.GENDERS;
  patientForm: FormGroup;
  vitalSignCollapse = false;
  patients:any[]=[]
  constructor(private fb: FormBuilder,private patientService:PatientService) { 
    this.patientForm = this.fb.group({
      id: [null],
      patientCode: [null, [Validators.required]],
      patientsName: [null, [Validators.required]],
      patientsSex: [null, [Validators.required]],
      yob: [null, [Validators.required]],
      phone: [null],
      email: [null],
      address: [null],
      patientType: [null, [Validators.required]],
    });
  } 
  getListPatient(){
    this.patientService.getPatients().subscribe({
      next:(res)=>{
        this.patients = res;
        console.log(this.patients)
      }
    })
  }

}
