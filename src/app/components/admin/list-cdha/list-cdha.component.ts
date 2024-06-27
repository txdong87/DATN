import { Component } from '@angular/core';
import { ListCdhaService } from 'src/app/services/list-cdha.service';

@Component({
  selector: 'app-list-cdha',
  templateUrl: './list-cdha.component.html',
  styleUrl: './list-cdha.component.css'
})
export class ListCDHAComponent {
  cols = [
    { field: 'cdhaName', header: 'Tên', width: '30%' },
    { field: 'dateCreate', header: 'Ngày tạo', width: '30%' },
    { field: 'timeEstimate', header: 'Thời gian thực hiện', width: '30%' },
    { field: 'price', header: 'Giá', width: '30' },
  ];
  selectedRow: any = {};
  createEditItemPopupData = {
    isVisibleDialog: false,
    isEdit: false,
    dialogHeader: '',
    selectedRow: {} as any,
  };
  listCDHA=[]
  deletedItem: any = {};
  textConfirmDelete = '';
  loading = false;
  total = 0;
  isVisible =false;
  textDelete='';
  confirmLabelDelete = "";
  deleteId = '';
  constructor(private cdhaService:ListCdhaService){

    this.search()
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
  }
  saveItemSuccess(event:any){
    this.createEditItemPopupData = { ...this.createEditItemPopupData, isVisibleDialog: false };
    // this.search();
  }
  onEdit(row: any) {
    this.selectRow(row);
    this.createEditItemPopupData = { ...this.createEditItemPopupData, isEdit: true, selectedRow: this.selectedRow, isVisibleDialog: true };
  }
  onDelete(item: any) {
    this.deleteId = item.id
    this.textDelete=`Xác nhận xóa chỉ định hình ảnh<b> ${item.name}</b>?`;
    this.isVisible = true;
    this.confirmLabelDelete = "Delete";
    }
  deleteUser() {
    this.cdhaService.deleteById(this.deleteId).subscribe({
      next: (res) => {
        if (res.isValid) {
         
          this.isVisible = false;
          // this.search();
        } else {
            if(res.errors && res.errors.length > 0){
                res.errors.forEach((el: any) => {
                })
            }else{
            }
        }
      }
    });
  }
  selectRow(row: any) {
    if (row) {
      console.log(row)
      this.selectedRow = row;
      //   this.createEditItemPopupData.selectedRow = row;
    }
  }
}
