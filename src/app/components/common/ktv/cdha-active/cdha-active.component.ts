import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-cdha-active',
  templateUrl: './cdha-active.component.html',
  styleUrls: ['./cdha-active.component.css'] // Chú ý đến s ở cuối là styleUrls
})
export class CdhaActiveComponent implements OnInit {
  totalCaseStudies: any;
  selectedCaseStudy: any = {};
  caseStudies: any[] = [];
  cols: any[] = [];
  clickTimer: any;
  actions: MenuItem[] = [];
  loading = false;
  patients: any[] = [];
  cdha: any;

  @Output() onSelectCaseStudy = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.getListCDHA();
    this.setupColumns();
  }

  getListCDHA() {
    // Thêm logic lấy danh sách CDHA ở đây
  }

  setupColumns() {
    this.cols = [
      {
        field: 'idx',
        header: 'STT',
        width: '5rem',
        sortField: 'idx',
        sort: 'none'
      },
      {
        field: 'patientName',
        header: 'Tên bệnh nhân',
        width: '5rem',
        sortField: 'PatientsName',
        sort: 'none'
      },
      {
        field: 'patientCode',
        header: 'Mã bệnh nhân',
        width: '5rem',
        sortField: 'PatientCode',
        sort: 'none'
      },
      {
        field: 'createdAt',
        header: 'Ngày tạo',
        width: '5rem',
        sortField: 'CreatedTime',
        sort: 'desc'
      }
    ];

    // Thêm cột STT vào đầu danh sách cột
    this.cols.unshift({
      field: 'idx',
      header: 'STT',
      width: '12rem',
      sortField: 'idx',
      sort: 'none',
    });
  }

  onResetSearchData() {
    // Thêm logic reset dữ liệu tìm kiếm
  }

  onModelChangeSearchData() {
    // Thêm logic khi mô hình tìm kiếm thay đổi
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

  onCreateCaseStudy() {
    // Thêm logic tạo mới case study
  }

  onRowSelect(event: any, data: any) {
    if (event.detail === 1) {
      this.clickTimer = setTimeout(() => {
        this.selectedCaseStudy = data;
        this.onSelectCaseStudy.emit(data);
      }, 300);
    }
  }

  onColumnClick(event: MouseEvent, data: any) {
    event.stopPropagation();
    console.log(event, data);
    this.onSelectCaseStudy.emit(data);
  }
}
