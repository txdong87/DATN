import { ListCdhaService } from 'src/app/services/list-cdha.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CDHACaseStudyService } from 'src/app/services/cdha-case-study.service';
import { SearchCaseStudy,INIT_SEARCH_CASE_STUDY, } from 'src/app/models/search-case-study';
import { DataSharingService } from 'src/app/shared/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cdha-active',
  templateUrl: './cdha-active.component.html',
  styleUrls: ['./cdha-active.component.css'] 
})
export class CdhaActiveComponent implements OnInit {
  searchData: SearchCaseStudy = structuredClone(INIT_SEARCH_CASE_STUDY);
  totalCaseStudies:any
  listCDHA=[]
  cols: any[] = [];
  clickTimer: any;
  actions: MenuItem[] = [];
  loading = false;
  patients: any[] = [];
  cdha: any;
  total = 0;
  selectedCaseStudy:any
  selectedRow: any = {};
  @Output() onSelectCdha = new EventEmitter<any>();

  constructor(private cdhaService:CDHACaseStudyService,private router: Router,private dataShareService:DataSharingService) {}

  ngOnInit() {
    this.getListCDHA();
    this.setupColumns();
  }

  getListCDHA() {
    this.cdhaService.getAll().subscribe({
      next: (res) => {
        this.listCDHA = res;
        this.totalCaseStudies = res.length;
        console.log(res)
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    }).add(() => {
      this.loading = false;
    });
  }

  setupColumns() {
    this.cols = [
      {
        field: 'patientName',
        header: 'Tên bệnh nhân',
        width: '5rem',
        sortField: 'patientName',
        sort: 'none'
      },
      {
        field: 'medicalCdhaName',
        header: 'Tên chỉ định',
        width: '5rem',
        sortField: 'medicalCdhaName',
        sort: 'none'
      },
      {
        field: 'dateCreate',
        header: 'Ngày tạo',
        width: '5rem',
        sortField: 'dateCreate',
        sort: 'desc'
      }
    ];

  }

  onResetSearchData() {
    // Thêm logic reset dữ liệu tìm kiếm
  }
  onModelChangeSearchData(){

  }
  onColResize(event: any) {
    let colResize = this.cols.find((el) => el.field === event.element.dataset.colname);
    let fontSize = parseInt(getComputedStyle(document.documentElement).fontSize, 10);
    let originalSize = parseInt(colResize.width, 10);
    let size = +(event.delta / fontSize).toFixed(2);
    let colSizeAfter = originalSize + size;
    colResize.width = colSizeAfter + 'rem';
    this.loading = true;
  }


selectRow(row: any) {
  if (row) {
    console.log('Selected Row:', row);
    this.selectedRow = row;
    this.dataShareService.setSelectedRow(row);
    this.onSelectCdha.emit(row);
    this.router.navigate(['/ktv/perform-cdha'], { state: { selectedRow: row } })
    .then(success => console.log('Navigation successful:', success))
    .catch(error => console.error('Navigation failed:', error));
    console.log(1)
  }
}

  onColumnClick(event: MouseEvent, data: any) {
    event.stopPropagation();
    console.log(event, data);
    this.onSelectCdha.emit(data);
  }
}
