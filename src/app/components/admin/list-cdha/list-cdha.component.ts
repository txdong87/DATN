import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListCdhaService } from 'src/app/services/list-cdha.service';

@Component({
  selector: 'app-list-cdha',
  templateUrl: './list-cdha.component.html',
  styleUrls: ['./list-cdha.component.css']
})
export class ListCDHAComponent {
  cols = [
    { field: 'cdhaName', header: 'Tên', width: '30%' },
    { field: 'dateCreate', header: 'Ngày tạo', width: '30%' },
    { field: 'timeEstimate', header: 'Thời gian thực hiện', width: '30%' },
    { field: 'price', header: 'Giá', width: '30%' },
  ];
  selectedRow: any = {};
  createEditItemPopupData = {
    isVisibleDialog: false,
    isEdit: false,
    dialogHeader: '',
    selectedRow: {} as any,
  };
  listCDHA = [];
  deletedItem: any = {};
  textConfirmDelete = '';
  loading = false;
  total = 0;
  isVisible = false;
  textDelete = '';
  confirmLabelDelete = "";
  deleteId = '';
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private cdhaService: ListCdhaService) {
    this.formGroup = this.fb.group({
      id: [null],
      cdhaName: [null, Validators.required],
      dateCreate: [null, Validators.required],
      timeEstimate: [null, Validators.required],
      price: [null, Validators.required],
    });

    this.search();
  }

  search() {
    this.loading = true;
    this.cdhaService.getAll().subscribe({
      next: (res) => {
        this.listCDHA = res;
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

  onCreateItem() {
    this.createEditItemPopupData = { ...this.createEditItemPopupData, isEdit: false, isVisibleDialog: true };
    this.formGroup.reset();
  }

  onEdit(row: any) {
    this.selectRow(row);
    this.createEditItemPopupData = { ...this.createEditItemPopupData, isEdit: true, selectedRow: this.selectedRow, isVisibleDialog: true };
    this.formGroup.patchValue(row);
  }

  saveItem() {
    if (this.formGroup.invalid) {
      return;
    }

    const cdhaData = this.formGroup.value;
    if (cdhaData.id) {
      // Update logic
      this.cdhaService.update(cdhaData.id,cdhaData).subscribe(() => {
        this.search();
        this.createEditItemPopupData.isVisibleDialog = false;
      });
    } else {
      // Create logic
      this.cdhaService.create(cdhaData).subscribe(() => {
        this.search();
        this.createEditItemPopupData.isVisibleDialog = false;
      });
    }
  }

  onDelete(item: any) {
    this.deleteId = item.id;
    this.textDelete = `Xác nhận xóa chỉ định hình ảnh ${item.cdhaName}?`;
    this.isVisible = true;
    this.confirmLabelDelete = "Delete";
  }

  deleteUser() {
    this.cdhaService.deleteById(this.deleteId).subscribe({
      next: (res) => {
        if (res.isValid) {
          this.isVisible = false;
          this.search();
        } else {
          if (res.errors && res.errors.length > 0) {
            res.errors.forEach((el: any) => {
              console.error(el);
            });
          } else {
            console.error('Unknown error occurred');
          }
        }
      },
    });
  }

  selectRow(row: any) {
    if (row) {
      this.selectedRow = row;
    }
  }
}
