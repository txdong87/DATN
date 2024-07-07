import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TabView } from 'primeng/tabview';
import { CaseStudyService } from 'src/app/services/case-study.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';
import { Constants } from 'src/app/shared/constants/constants';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-main-nurse',
  templateUrl: './main-nurse.component.html',
  styleUrls: ['./main-nurse.component.css']
})
export class MainNurseComponent implements OnInit {
  @Input() newPatient: any;

  GENDERS = Constants.GENDERS;
  cols: any[] = [
    {
      "field": "caseStudyId",
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
      "sortField": "doctorName",
      "field": "doctorName",
      "header": "Tên bác sĩ",
      "sort": "none"
    },
    {
      "width": "13.79rem",
      "sortField": "CreatedTime",
      "field": "createDate",
      "header": "Ngày tạo",
      "sort": "desc"
    },
  ];

  caseStudy: any[] = [];
  listPatients: any[] = [];
  listDoctor: any[] = [];
  PATIENT_TYPES = Constants.PATIENT_TYPES;
  patientForm: FormGroup;
  formAddVisit: FormGroup;
  vitalSignCollapse = false;
  selectedPatient: any;
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
    private doctorService: DoctorService,
    private caseStudyService: CaseStudyService,
    private tabView: TabView,
    private messageService: MessageService
  ) {
    this.patientForm = this.fb.group({
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
      doctorId: [null, Validators.required],
      diagnostic: [null],
      status: [null]
    });
  }

  ngOnInit() {
    this.getListPatient();
    this.getListDoctor();
    this.getCaseStudy();
    console.log(this.newPatient);
  }

  onSave() {
    // Logic for saving data if needed
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
      this.caseStudy.push(newPatient);

      if (newPatient.id) {
        this.formAddVisit.patchValue({
          patientId: newPatient.id
        });
      }
    }
  }

  getListPatient() {
    this.patientService.getPatients().subscribe((res: any) => {
      this.listPatients = res;
    });
  }

  getListDoctor() {
    this.doctorService.getAll().subscribe((res: any) => {
      this.listDoctor = res;
    });
  }

  addPatient() {
    if (this.patientForm.invalid) {
      this.notification.error('Nhập đủ các trường bệnh nhân', '');
      return;
    }
    this.patientService.create({ ...this.patientForm.value }).subscribe({
      next: (res: any) => {
        this.newPatient = res.data;
        this.notification.success('Thêm mới bệnh nhân thành công', '');
        console.log(res);
        const patientId = res.data.patientId;
        this.patientForm.reset();
        this.formAddVisit.patchValue({
          patientId: patientId
        });
        this.activeTabIndex = 1;
        console.log("Patient added with ID:", patientId); 
      },
      error: (err: any) => {
        this.notification.error('Thêm mới bệnh nhân thất bại', '');
      }
    });
  }

  onRowSelect(event: any) {
    const selectedPatient = event.data;
    this.newPatient = selectedPatient;
    this.activeTabIndex = 1;
    this.formAddVisit.patchValue({
      patientId: selectedPatient.id
    });
  }

  addCaseStudy() {

    if (this.formAddVisit.invalid) {
      this.notification.error('Vui lòng nhập đầy đủ thông tin ca khám', '');
      return;
    }

    this.caseStudyService.create({ ...this.formAddVisit.value }).subscribe({
      next: (res: any) => {
        this.messageService.add({ severity: 'success', summary: 'Thêm ca khám thành công', detail: 'Via MessageService' });
        this.caseStudy.push(res.data);
         this.activeTabIndex = 0;
        this.refreshLists();
      },
      error: (err: any) => {
        this.notification.error('Thêm mới ca khám thất bại', '');
      }
    });
  }

  getCaseStudy() {
    this.caseStudyService.getCaseStudy().subscribe((res: any) => {
      this.caseStudy = res.map((cs: any) => ({
        caseStudyId: cs.caseStudyId,
        patientName: cs.patient.patientName,
        doctorName: cs.doctor.doctorName,
        createDate: this.convertISODateToNormalDate(cs.createDate),
      }));
    });
  }

  convertISODateToNormalDate(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  }

  private refreshLists() {
    this.getListPatient();
    this.getListDoctor();
    this.getCaseStudy();
  }
}
