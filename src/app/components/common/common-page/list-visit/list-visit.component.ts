import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/notification.service';
import { Constants } from 'src/app/constant/constants';
@Component({
  selector: 'app-list-visit',
  templateUrl: './list-visit.component.html',
  styleUrl: './list-visit.component.css'
})

export class ListVisitComponent {
  GENDERS = Constants.GENDERS;
  PATIENT_TYPES = Constants.PATIENT_TYPES;
  patientForm: FormGroup;
  layout = {
    columns: [
      {
        visible: true,
        size: 50,
        name: 'add-visit',
        columns: [],
      },
      {
        visible: true,
        size: 50,
        name: 'list-visit',
        columns: [],
      },
    ],
    disabled: false,
  };
  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
  ) {
    this.patientForm = this.fb.group({
      id: [null],
      patientCode: [null, [Validators.required]],
      patientsName: [null, [Validators.required]],
      patientsSex: [null, [Validators.required]],
      yob: [null, [Validators.required]],
      cmnd: [null],
      phoneNo: [null],
      email: [null],
      address: [null],
      faculty: [null],
      room: [null],
      sickBed: [null],
      patientType: [null, [Validators.required]],
      bhyt: [null],
      validDateBHYT: [null],
      expireDateBHYT: [null],
    });
  }
  onSave() {
    // if (this.patientForm.valid) {
    //   if (this.patientId == '') {
    //     this.createPatient();
    //   } else {
    //     this.updatePatient();
    //   }
    // } else {
    //   Object.values(this.patientForm.controls).forEach((control) => {
    //     if (control.invalid) {
    //       control.markAsDirty();
    //       control.updateValueAndValidity({ onlySelf: true });
    //     }
    //   });
    // }
  }

}
