import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListMedicationService } from 'src/app/services/list-medication.service';

@Component({
  selector: 'app-list-medication',
  templateUrl: './list-medication.component.html',
  styleUrls: ['./list-medication.component.css']
})
export class ListMedicationComponent {
  rows: any = [];
  total = 0;
  loading = false;
  cols: any[] = [];
  url: any;
  msg = ''; 
  formGroup: FormGroup;
  selectedItem: any;
  selectedImg: string = '';
  bannersDialogHeader = '';
  visibleImage: boolean = false;
  visibleDialog: boolean = false;
  deleteId = '';
  isVisible = false;
  searchData: any = {
    name: '',
    take: 40,
    skip: 0
  };

  constructor(private fb: FormBuilder, private listMedicationService: ListMedicationService) {
    this.formGroup = this.fb.group({
      id: [null],
      type: [null],
      name: [null],
      nameEn: [null],
      description: [null],
      descriptionEn: [null],
      order: [null],
      enable: true,
    });
    this.cols = [
      { field: 'name', header: 'Tên' },
      { field: 'unit', header: 'Đơn vị' },
      { field: 'route', header: 'Đường dùng' },
      { field: 'usage', header: 'Sử dụng' },
      { field: 'isFunctionalFoods', header: 'Thực phẩm chức năng' },
    ];
    this.search();
  }

  search() {
    this.loading = true;
    this.listMedicationService.getAll().subscribe({
      next: (res) => {
        this.rows = res;
        this.total = res.length;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    }).add(() => {
      this.loading = false;
    });
  }

  onSearch() {
    this.search();
  }

  onClearSearch() {
    this.searchData = {
      name: '',
      take: 40,
      skip: 0
    };
    this.search();
  }

  onCreate() {
    this.visibleDialog = true;
    this.bannersDialogHeader = 'Thêm mới';
    this.formGroup.reset();
  }

  selectItem(item: any) {
    this.selectedItem = item;
  }

  onPageChange(data: any) {
    this.searchData.skip = data.first;
    this.searchData.take = data.rows;
    this.search();
  }

  onDelete(item: any) {
    // Implement delete logic
  }

  deleteUser() {
    this.listMedicationService.deleteById(this.deleteId).subscribe({
      next: (res) => {
        if (res.isValid) {
          this.isVisible = false;
          this.search();
        } else {
          if (res.errors && res.errors.length > 0) {
            res.errors.forEach((el: any) => {
              // Handle errors
            });
          } else {
            // Handle generic error
          }
        }
      }
    });
  }
}
