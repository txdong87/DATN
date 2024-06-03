import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { Constants } from 'src/app/constant/constants';
@Component({
  selector: 'app-list-visit',
  templateUrl: './list-visit.component.html',
  styleUrl: './list-visit.component.css'
})

export class ListVisitComponent {
  GENDERS = Constants.GENDERS;
  cols!: any[];
  caseStudy:any[]=[]
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
  ngOnInit(){
    this.cols=[
      {
          "field": "idx",
          "header": "STT",
          "width": "12rem",
          "sortField": "idx",
          "sort": "none"
      },
      {
          "width": "9.5rem",
          "sortField": "State",
          "field": "state",
          "header": "Trạng thái",
          "sort": "none"
      },
      {
          "width": "11.54rem",
          "sortField": "CsStatus",
          "field": "csStatus",
          "header": "Trạng thái CK",
          "sort": "none"
      },
      {
          "width": "15.93rem",
          "sortField": "PatientsName",
          "field": "patientsName",
          "header": "Tên bệnh nhân",
          "sort": "none"
      },
      {
          "width": "19.79rem",
          "sortField": "CreatedTime",
          "field": "createdTime",
          "header": "Ngày lấy mẫu",
          "sort": "desc"
      },
      {
          "width": "23.57rem",
          "sortField": "SourceHospital",
          "field": "sourceHospital",
          "header": "Nơi gửi mẫu",
          "sort": "none"
      },
      {
          "width": "10rem",
          "sortField": "BodyPart",
          "field": "bodyPart",
          "header": "Vị trí lấy mẫu",
          "sort": "none"
      },
      {
          "width": "10rem",
          "sortField": "PatientCode",
          "field": "patientCode",
          "header": "Mã bệnh nhân",
          "sort": "none"
      },
      {
          "width": "10rem",
          "sortField": "SpecimensCode",
          "field": "specimensCode",
          "header": "Mã bệnh phẩm",
          "sort": "none"
      },
      {
          "width": "18rem",
          "sortField": "Conclusion",
          "field": "conclusion",
          "header": "Kết luận",
          "sort": "none"
      },
      {
          "width": "8.5rem",
          "sortField": "SlideCount",
          "field": "slideCount",
          "header": "Số lam kính",
          "sort": "none"
      },
      {
          "width": "13.79rem",
          "sortField": "CreatedTime",
          "field": "createdDate",
          "header": "Ngày tạo",
          "sort": "desc"
      },
      {
          "width": "15rem",
          "sortField": "ClinicalDiagnosis",
          "field": "clinicalDiagnosis",
          "header": "Chẩn đoán",
          "sort": "none"
      },
      {
          "width": "14.21rem",
          "sortField": "RequestTypeLabel",
          "field": "requestTypeLabel",
          "header": "Loại yêu cầu",
          "sort": "none"
      }
  ]
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
