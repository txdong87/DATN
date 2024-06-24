import { Component } from '@angular/core';
import { SearchVisitSmall } from 'src/app/models/listVisit.class';
@Component({
  selector: 'app-case-study-table',
  templateUrl: './case-study-table.component.html',
  styleUrl: './case-study-table.component.css'
})
export class CaseStudyTableComponent {
  isLoading = false;
  // config: IlayoutConfig = null;
  search: SearchVisitSmall 
  searchDataIsReceived = false;
  caseStudy:any[]=[]
  cols = [ 
    {
      "header": 'STT',
      "field": "STT",
    },
    {
      "header": 'Tên bệnh nhân',
      "field": "patientName",
    },
    // {
    //   "header": 'STT',
    //   "width": '30',
    //   "field": "csStatus",
    // },
    // {
    //   title: '',
    //   width: 50,
    // },
  ];
  isExpandSearch = false;
  constructor(){
    this.search = {
      patientName: '',
      patientCode: '',
      visitDate: '',
      visitStatus: null,
      isReceived:null,
    };
  }
  ngOnInit(){
   
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

}