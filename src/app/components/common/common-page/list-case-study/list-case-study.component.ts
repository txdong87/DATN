import { Component } from '@angular/core';
import { IlayoutConfig } from 'src/app/models/ilayout-config';
import { SearchVisitSmall } from 'src/app/models/listVisit.class';

@Component({
  selector: 'app-list-case-study',
  templateUrl: './list-case-study.component.html',
  styleUrl: './list-case-study.component.css'
})
export class ListCaseStudyComponent {
  isLoading = false;
  indexTab = 0;
  // config: IlayoutConfig = null;
  search: SearchVisitSmall 
  searchDataIsReceived = false;
  currentVisit: any = {};
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
  onTabChange(event: any): void {
    console.log(event)
    this.indexTab = event.index;
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
