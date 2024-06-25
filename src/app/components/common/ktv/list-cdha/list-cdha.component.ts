
import { PatientService } from '../../../../services/patient.service';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { SearchCaseStudy,INIT_SEARCH_CASE_STUDY, } from 'src/app/models/search-case-study';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-list-cdha',
  standalone: true,
  imports: [],
  templateUrl: './list-cdha.component.html',
  styleUrl: './list-cdha.component.css'
})
export class ListCdhaComponent {
  searchData: SearchCaseStudy = structuredClone(INIT_SEARCH_CASE_STUDY);
  totalCaseStudies:any;
  selectedCaseStudy: any = {};
  caseStudies: any[] = [];
  cols!: any[];
  clickTimer: any;
  actions!: MenuItem[];
  loading = false;
  patients:any[]=[]
  @Output() onSelectCaseStudy = new EventEmitter<any>();
  constructor(private patientService: PatientService ){

  }
  ngOnInit(){
    this.getListPatient()
    this.cols=[
      
  ]
  this.cols.unshift({
    field: 'idx',
    header: 'STT',
    width: '12rem',
    sortField: 'idx',
    sort: 'none',
  });
  }
  getListPatient(){
    this.patientService.getPatients().subscribe({
      next:(res)=>{
        this.patients = res;
        console.log(this.patients)
      }
    })
  }
  onResetSearchData() {
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
