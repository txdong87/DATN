import { PatientService } from 'src/app/services/patient.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { Constants } from 'src/app/constant/constants';
import { TabView } from 'primeng/tabview';
@Component({
  selector: 'app-list-visit',
  templateUrl: './list-visit.component.html',
  styleUrl: './list-visit.component.css'
})

export class ListVisitComponent {
  @Input() newPatient: any;
  GENDERS = Constants.GENDERS;
  cols!: any[];
  caseStudy:any[]=[]
  PATIENT_TYPES = Constants.PATIENT_TYPES;
  patientForm:FormGroup
  formAddVisit:FormGroup
  vitalSignCollapse = false;
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
  activeTabIndex: number = 0;
  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    private patientService: PatientService,
    private tabView: TabView
  ) {
    console.log(this.newPatient,this.activeTabIndex)
    this.patientForm = this.fb.group({
      id: [null],
      patientCode: [null, [Validators.required]],
      patientName: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      phone: [null],
      address: [null],
    });
    this.formAddVisit = this.fb.group({
      id: [0],
      appointmentId: [0],
      roomId: [null],
      visitDate: [new Date(), [Validators.required]],
      visitReason: [null, [Validators.required]],
    });
  }
  ngOnInit(){
    console.log(this.newPatient)
    this.cols=[
      {
          "field": "idx",
          "header": "STT",
          "width": "12rem",
          "sortField": "idx",
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
          "width": "10rem",
          "sortField": "PatientCode",
          "field": "patientCode",
          "header": "Mã bệnh nhân",
          "sort": "none"
      },
      {
          "width": "13.79rem",
          "sortField": "CreatedTime",
          "field": "createdDate",
          "header": "Ngày tạo",
          "sort": "desc"
      },
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
  get visitFormCtrl() {
    return this.formAddVisit.controls;
  }
  vitalInfoCollapse() {
    this.vitalSignCollapse = !this.vitalSignCollapse;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['newPatient'] && changes['newPatient'].currentValue) {
      const newPatient = changes['newPatient'].currentValue;
      console.log('New patient received:', newPatient);
      this.caseStudy.push(newPatient); // Giả sử bạn thêm bệnh nhân mới vào danh sách thăm khám
    }
  }
  addPatient(){
    if (this.patientForm.invalid) {
      // Hiển thị cảnh báo rằng các trường bắt buộc cần được điền đầy đủ
      this.notification.error('Vui lòng điền đầy đủ thông tin bắt buộc.');
      return;
    }
    this.patientService.create({ ...this.patientForm.value}).subscribe({
      next: (res) => {
        
        this.activeTabIndex = 1;
        console.log(this.activeTabIndex)
        // this.patientAdded.emit(res);
    }
    })
  }
}
