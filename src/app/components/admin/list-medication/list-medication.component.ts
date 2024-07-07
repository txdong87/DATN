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
  userDialogHeader = '';
  visibleDialog: boolean = false;
  isDeleteDialogVisible: boolean = false;
  deleteId = '';
  isVisible = false;
  searchData: any = {
    name: '',
    take: 40,
    skip: 0
  };
  createEditItemPopupData = {
    isVisibleDialog: false,
    isEdit: false,
    dialogHeader: '',
    selectedRow: {} as any,
  };
  selectedRow: any = {};

  constructor(private fb: FormBuilder, private listMedicationService: ListMedicationService) {
    this.formGroup = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      unit: [null, Validators.required],
      route: [null, Validators.required],
      usage: [null, Validators.required],
      isFunctionalFoods: [false]
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

  selectRow(row: any) {
    if (row) {
      this.selectedRow = row;
    }
  }

  onEdit(row: any) {
    this.selectRow(row);
    this.visibleDialog = true;
    this.userDialogHeader = 'Chỉnh sửa thuốc';
    this.formGroup.patchValue(row);
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
    this.formGroup.reset();
    this.userDialogHeader = 'Thêm thuốc mới';
  }

  selectItem(item: any) {
    this.selectedItem = item;
  }

  onPageChange(data: any) {
    this.searchData.skip = data.first;
    this.searchData.take = data.rows;
    this.search();
  }

  confirmDelete(item: any) {
    this.selectedItem = item;
    this.isDeleteDialogVisible = true;
  }

  saveMedication() {
    if (this.formGroup.invalid) {
      return;
    }

    const medicationData = this.formGroup.value;
    if (medicationData.id) {
      // Update logic
      this.listMedicationService.update(medicationData.id,medicationData).subscribe(() => {
        this.search();
        this.visibleDialog = false;
      });
    } else {
      // Create logic
      this.listMedicationService.create(medicationData).subscribe(() => {
        this.search();
        this.visibleDialog = false;
      });
    }
  }

  deleteMedication() {
    if (this.selectedItem && this.selectedItem.id) {
      this.listMedicationService.deleteById(this.selectedItem.id).subscribe(() => {
        this.search();
        this.isDeleteDialogVisible = false;
      });
    }
  }
}
