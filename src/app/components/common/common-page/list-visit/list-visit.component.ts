
import { DoctorService } from './../../../../services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';
import { CaseStudyService } from 'src/app/services/case-study.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/notification.service';
import { Constants } from 'src/app/shared/constants/constants';
import { TabView } from 'primeng/tabview';
import { MessageService } from 'primeng/api';
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
  listPatients:any[]=[]
  listDoctor:any[]=[]
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
    private doctorService:DoctorService,
    private caseStudyService:CaseStudyService,
    private tabView: TabView,
    private messageService: MessageService 
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
      patientId: [null, Validators.required],
      reason: [null, Validators.required],
      createDate: [new Date(), Validators.required],
      doctor: [null, Validators.required],
      diagnostic: [null],
      status: [null]
    });
  }
  ngOnInit(){
    this.getListDoctor()
    this.getCaseStudy()
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
          "field": "patientName",
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
          "field": "createdAt",
          "header": "Ngày tạo",
          "sort": "desc"
      },
  ]
  }
  onSave() {
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
  getListPatient(){
    this.patientService.getPatients().subscribe((res: any) => {
      this.listPatients=res.data
  })
  }
  getListDoctor(){
    this.doctorService.getDoctors().subscribe((res: any) => {
      this.listDoctor=res.data;
      console.log(res)
  })
  }
  addPatient(){
    if (this.patientForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Closable Message Content' },);
      return;
    }
    this.patientService.create({ ...this.patientForm.value}).subscribe({
      next: (res) => {
        this.newPatient=res.data
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
        this.activeTabIndex = 1;
        console.log(this.activeTabIndex)
        // this.patientAdded.emit(res);
    }
    })
  }
  addCaseStudy(){
    console.log(1,this.formAddVisit)
    this.caseStudyService.create({ ...this.formAddVisit.value}).subscribe({
      next: (res) => {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
        console.log(res)
    }
    })
  }
  getCaseStudy(){
    this.caseStudyService.getCaseStudy().subscribe((res: any) => {
      this.caseStudy=res;
      console.log(this.caseStudy)
  })
  }
  convertISODateToNormalDate(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleDateString(); 
  }
}
