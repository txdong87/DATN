import { Component, Output, EventEmitter } from '@angular/core';
import { SearchVisitSmall } from 'src/app/models/listVisit.class';
import { MenuItem } from 'primeng/api';
import { CaseStudyService } from 'src/app/services/case-study.service';

@Component({
  selector: 'app-case-study-table',
  templateUrl: './case-study-table.component.html',
  styleUrls: ['./case-study-table.component.css']
})
export class CaseStudyTableComponent {
  @Output() selectedCaseStudy = new EventEmitter<any>();
  isLoading = false;
  totalCaseStudies: any;
  search: SearchVisitSmall;
  searchDataIsReceived = false;
  caseStudy: any[] = [];
  patient: any[] = [];
  actions!: MenuItem[];
  cols = [
    {
      header: 'STT',
      field: 'caseStudyId',
      width: '15rem'
    },
    {
      header: 'Tên bệnh nhân',
      field: 'patientName',
      width: '15rem'
    },
    {
      header: 'Trạng thái',
      field: 'status',
      width: '15rem'
    }
  ];
  isExpandSearch = false;

  constructor(private caseStudyService: CaseStudyService) {
    this.search = {
      patientName: '',
      patientCode: '',
      visitDate: '',
      visitStatus: null,
      isReceived: null,
    };
  }

  ngOnInit() {
    this.getCaseStudy();
  }


  getCaseStudy() {
    this.caseStudyService.getCaseStudy().subscribe((res: any[]) => {
        this.caseStudy = res.map(cs => {
            let status;
            if (cs.medicalCdhas.length === 0 && cs.conclusion === "NULL" && cs.diagnostic === "NULL") {
                status = 'Chờ kết quả';
            } else if (cs.conclusion === "NULL" && cs.diagnostic === "NULL") {
                status = 'Chờ khám';
            } else {
                status = 'Đã khám';
            }
            const patientName = cs.patient.patientName;
            return {
                ...cs,
                patientName: patientName,
                status: status
            };
        }).sort((a, b) => {
            if (a.status === 'Chờ khám' && b.status === 'Đã khám') {
                return -1;
            } else if (a.status === 'Đã khám' && b.status === 'Chờ khám') {
                return 1;
            } else if (a.status === 'Chờ kết quả' && (b.status === 'Đã khám' || b.status === 'Chờ khám')) {
                return -1;
            } else if ((a.status === 'Đã khám' || a.status === 'Chờ khám') && b.status === 'Chờ kết quả') {
                return 1;
            } else {
                return 0;
            }
        });
        console.log('Case Studies:', this.caseStudy);
    });
}


  onSearchPatientName(e: any) {
    // Handle search logic if needed
  }

  searchListVisit() {
    // Handle search logic if needed
  }

  resetSearch() {
    // Handle reset logic if needed
  }

  onColumnClick(event: MouseEvent, data: any) {
    console.log('Column clicked:', event, data);
    this.selectedCaseStudy.emit(data);
  }
}
