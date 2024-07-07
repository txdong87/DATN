import { Component } from '@angular/core';
import { SearchVisitSmall } from 'src/app/models/listVisit.class';
import { MenuItem } from 'primeng/api';
import { CaseStudyService } from 'src/app/services/case-study.service';
@Component({
  selector: 'app-case-study-table',
  templateUrl: './case-study-table.component.html',
  styleUrl: './case-study-table.component.css'
})
export class CaseStudyTableComponent {
  isLoading = false;
  totalCaseStudies: any;
  selectedCaseStudy: any = {};
  // config: IlayoutConfig = null;
  search: SearchVisitSmall 
  searchDataIsReceived = false;
  caseStudy:any[]=[]
  patient:any[]=[]
  actions!: MenuItem[];
  cols = [ 
    {
      "header": 'STT',
      "field": "caseStudyId",
      "width": '15rem'    },
    {
      "header": 'Tên bệnh nhân',
      "field": "patientName",
      "width": '15rem'
    },
  ];
  isExpandSearch = false;
  constructor(private caseStudyService:CaseStudyService){
    this.search = {
      patientName: '',
      patientCode: '',
      visitDate: '',
      visitStatus: null,
      isReceived:null,
    };
  }
  ngOnInit(){
   this.getCaseStudy()
  }
  getCaseStudy() {
    this.caseStudyService.getCaseStudy().subscribe((res: any[]) => {
      this.caseStudy = res;
      this.patient = this.caseStudy.map(cs => {
        const patientWithCaseStudyId = { ...cs.patient, caseStudyId: cs.caseStudyId };
        return patientWithCaseStudyId;
      });
      console.log(this.caseStudy, this.patient);
    });
  }
  
  onSearchPatientName(e:any) {
    // clearTimeout(this.timer);
    // this.timer = setTimeout(() => {
    //   this.totalVisit = 0;
    //   this.listVisits = [];
    //   this.pageIndex = 1;
    //   this.getListVisit();
    // }, 500);
  }
  searchListVisit() {
    // this.totalVisit = 0;
    // this.listVisits = [];
    // this.pageIndex = 1;
    // this.getListVisit();
  }
  resetSearch() {
    // this.totalVisit = 0;
    // this.listVisits = [];
    // this.search.patientName = '';
    // this.search.patientCode = '';
    // this.search.visitDate = this.shareService.getToday();
    // this.search.visitStatus = null;
    // this.search.isReceived  = null;
    // this.pageIndex = 1;
    // this.getListVisit();
  }
  onColumnClick(event: MouseEvent,data:any) {
   console.log(event,data)
   
  }

}