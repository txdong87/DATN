import { Component,Input,Output,EventEmitter } from '@angular/core';
import { SearchCaseStudy,INIT_SEARCH_CASE_STUDY, } from 'src/app/models/search-case-study';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrl: './list-patient.component.css'
})
export class ListPatientComponent {
  searchData: SearchCaseStudy = structuredClone(INIT_SEARCH_CASE_STUDY);
  totalCaseStudies:any;
  selectedCaseStudy: any = {};
  caseStudies: any[] = [];
  cols!: any[];
  clickTimer: any;
  actions!: MenuItem[];
  loading = false;
  @Output() onSelectCaseStudy = new EventEmitter<any>();
  constructor(){
  this.caseStudies=[{
  "idx": 1,
  "caseStudyId": "6646bcd6346d242867419007",
  "patientCode": "0517",
  "patientsName": "BN 0517",
  "patientId": "6646bce6346d242867419008",
  "branchId": "642fda25c315466f34d0a089",
  "branchName": "dps VT",
  "sourceHospital": "Bệnh viện đa khoa quốc tế Thu Cúc",
  "bodyPart": "Báo cáo 4",
  "bodyPartUserTyping": null,
  "clinicalDiagnosis": "",
  "diagnostic": null,
  "conclusion": "chan doan; ",
  "conclusionUnsigned": null,
  "requestType": "1",
  "description": "",
  "slideCount": 1,
  "using": null,
  "state": 4,
  "createdTime": "17/05/2024",
  "slides": null,
  "isDeleted": false,
  "modalityCode": null,
  "modalityName": null,
  "patientType": null,
  "bhyt": null,
  "expireBHYT": null,
  "room": null,
  "sickBed": null,
  "faculty": null,
  "address": null,
  "specimensDate": null,
  "createdDate": "2024-05-17T09:12:44+07:00",
  "patientFrom": "DPS",
  "casestudyFrom": "DPS",
  "specimensCode": "",
  "isPrint": false,
  "isApprove": true,
  "hasSilde": true,
  "hasConclusion": null,
  "mixSpecimensUserId": null,
  "mixSpecimensTime": "",
  "makeTemplatesUserId": null,
  "makeTemplatesTime": "",
  "predictType": null,
  "specimenReceiverId": null,
  "specimenReceiverName": null,
  "numberOfSpecimensReceived": null,
  "numberOfBlocks": null,
  "notes": null,
  "csStatus": 0
},
{
  "idx": 1,
  "caseStudyId": "6646bcd6346d242867419007",
  "patientCode": "0517",
  "patientsName": "BN 0517",
  "patientId": "6646bce6346d242867419008",
  "branchId": "642fda25c315466f34d0a089",
  "branchName": "dps VT",
  "sourceHospital": "Bệnh viện đa khoa quốc tế Thu Cúc",
  "bodyPart": "Báo cáo 4",
  "bodyPartUserTyping": null,
  "clinicalDiagnosis": "",
  "diagnostic": null,
  "conclusion": "chan doan; ",
  "conclusionUnsigned": null,
  "requestType": "1",
  "description": "",
  "slideCount": 1,
  "using": null,
  "state": 4,
  "createdTime": "17/05/2024",
  "slides": null,
  "isDeleted": false,
  "modalityCode": null,
  "modalityName": null,
  "patientType": null,
  "bhyt": null,
  "expireBHYT": null,
  "room": null,
  "sickBed": null,
  "faculty": null,
  "address": null,
  "specimensDate": null,
  "createdDate": "2024-05-17T09:12:44+07:00",
  "patientFrom": "DPS",
  "casestudyFrom": "DPS",
  "specimensCode": "",
  "isPrint": false,
  "isApprove": true,
  "hasSilde": true,
  "hasConclusion": null,
  "mixSpecimensUserId": null,
  "mixSpecimensTime": "",
  "makeTemplatesUserId": null,
  "makeTemplatesTime": "",
  "predictType": null,
  "specimenReceiverId": null,
  "specimenReceiverName": null,
  "numberOfSpecimensReceived": null,
  "numberOfBlocks": null,
  "notes": null,
  "csStatus": 0
}]
  }
  ngOnInit(){
    this.cols=[
      {
          "width": "9.5rem",
          "sortField": "State",
          "field": "state",
          "header": "Trạng thái"
      },
      {
          "width": "11.54rem",
          "sortField": "CsStatus",
          "field": "csStatus",
          "header": "Trạng thái CK"
      },
      {
          "width": "15.93rem",
          "sortField": "PatientsName",
          "field": "patientsName",
          "header": "Tên bệnh nhân"
      },
      {
          "width": "19.79rem",
          "sortField": "CreatedTime",
          "field": "createdTime",
          "header": "Ngày lấy mẫu"
      },
      {
          "width": "23.57rem",
          "sortField": "SourceHospital",
          "field": "sourceHospital",
          "header": "Nơi gửi mẫu"
      },
      {
          "width": "10rem",
          "sortField": "BodyPart",
          "field": "bodyPart",
          "header": "Vị trí lấy mẫu"
      },
      {
          "width": "10rem",
          "sortField": "PatientCode",
          "field": "patientCode",
          "header": "Mã bệnh nhân"
      },
      {
          "width": "10rem",
          "sortField": "SpecimensCode",
          "field": "specimensCode",
          "header": "Mã bệnh phẩm"
      },
      {
          "width": "18rem",
          "sortField": "Conclusion",
          "field": "conclusion",
          "header": "Kết luận"
      },
      {
          "width": "8.5rem",
          "sortField": "SlideCount",
          "field": "slideCount",
          "header": "Số lam kính"
      },
      {
          "width": "13.79rem",
          "sortField": "CreatedTime",
          "field": "createdDate",
          "header": "Ngày tạo"
      },
      {
          "width": "15rem",
          "sortField": "ClinicalDiagnosis",
          "field": "clinicalDiagnosis",
          "header": "Chẩn đoán"
      },
      {
          "width": "14.21rem",
          "sortField": "RequestTypeLabel",
          "field": "requestTypeLabel",
          "header": "Loại yêu cầu"
      }
  ]
  this.cols.unshift({
    field: 'idx',
    header: 'STT',
    width: '12rem',
    sortField: 'idx',
    sort: 'none',
  });
  }
  onResetSearchData() {
//     this.searchCaseStudyStateService.dispatch({ ...INIT_SEARCH_CASE_STUDY, branchId: this.selectedBranch })
 }
 onModelChangeSearchData(){

 }
 onColResize(event: any) {
  let colResize = this.cols.find((el) => {
    return el.field == event.element.dataset.colname;
  });
  let fontSize = parseInt(getComputedStyle(document.documentElement).fontSize);
  let originalSize = parseInt(colResize.width);
  let size = +(event.delta / fontSize).toFixed(2);
  let colSizeAfter = originalSize + size;
  colResize.width = colSizeAfter + 'rem';
  this.loading = true;
  // this.userGridService
  //   .saveUserGrid({ type: GridType.MAIN, columns: this.cols.filter((el) => el.field != 'idx') })
  //   .subscribe({
  //     next: (res) => {
  //       if (res.isValid) {
  //         this.notification.success('Đã lưu độ rộng cột');
  //       } else {
  //         this.notification.error('Không thể lưu độ rộng cột');
  //       }
  //     },
  //     error: () => {
  //       this.notification.error('Không thể lưu độ rộng cột');
  //     },
  //   })
  //   .add(() => {
  //     this.loading = false;
  //   });
}
 onCreateCaseStudy(){}
 onRowSelect(event: any, data: any) {
  if (event.detail == 1) {
    this.clickTimer = setTimeout(() => {
      this.selectedCaseStudy = data;
      this.onSelectCaseStudy.emit(data);
    }, 300);
  }
}
}
