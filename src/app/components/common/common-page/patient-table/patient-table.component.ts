import { SearchCaseStudy, INIT_SEARCH_CASE_STUDY } from 'src/app/models/search-case-study';
import { MenuItem } from 'primeng/api';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';
import { CaseStudyService } from 'src/app/services/case-study.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { TabView } from 'primeng/tabview';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {
  caseStudy: any[] = [];
  searchData: SearchCaseStudy = structuredClone(INIT_SEARCH_CASE_STUDY);
  totalCaseStudies: any;
  selectedCaseStudy: any = {};
  caseStudies: any[] = [];
  cols!: any[];
  clickTimer: any;
  actions!: MenuItem[];
  loading = false;
  @Output() onSelectCaseStudy = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private caseStudyService: CaseStudyService,
    private tabView: TabView,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getCaseStudy();
    this.cols = [
      {
        "field": "idx",
        "header": "STT",
        "width": "5rem",
        "sortField": "idx",
        "sort": "none"
      },
      {
        "width": "5rem",
        "sortField": "PatientsName",
        "field": "patientName",
        "header": "Tên bệnh nhân",
        "sort": "none"
      },
      {
        "width": "5rem",
        "sortField": "PatientCode",
        "field": "patientCode",
        "header": "Mã bệnh nhân",
        "sort": "none"
      },
      {
        "width": "5rem",
        "sortField": "CreatedTime",
        "field": "createdAt",
        "header": "Ngày tạo",
        "sort": "desc"
      },
    ];
  }

  onResetSearchData() {
    // this.searchCaseStudyStateService.dispatch({ ...INIT_SEARCH_CASE_STUDY, branchId: this.selectedBranch })
  }

  onModelChangeSearchData() {}

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
  }

  onCreateCaseStudy() {}


  getCaseStudy() {
    this.caseStudyService.getCaseStudy().subscribe((res: any) => {
      this.caseStudy = res;
      console.log(this.caseStudy);
    });
  }

  onColumnClick(event: MouseEvent,data:any) {
    // Ngăn chặn sự kiện nhấp vào cột kích hoạt sự kiện nhấp vào hàng
    event.stopPropagation();
   console.log(event,data)
   this.onSelectCaseStudy.emit(data);
    // Xử lý logic khi nhấp vào cột
  }
}
