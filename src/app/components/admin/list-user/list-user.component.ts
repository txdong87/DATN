import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {
  searchData = {
    skip: 0,
    take: 40,
    username: '',
  };
  loading = false;
  total = 0;
  users: any = [];
  cols: any[] = [];
  selectedUser: any = {};
  usersForm: FormGroup;
  usersFormEdit: FormGroup;
  userDialogHeader = '';
  // confirmLabelDisable = "";
  // confirmLabelEnable = "";
  isVisibleListGroups = false;
  _isVisibleUserDialog = false;
  isVisibleDeleteUserDialog =false;
  textDeleteUser='';
  confirmLabelDelete = "";
  deleteUserId = '';
  set isVisibleUserDialog(value: boolean) {
    this._isVisibleUserDialog = value;
    if (!value) {
      this.usersForm.markAsPristine();
    }
  }
  get isVisibleUserDialog() {
    return this._isVisibleUserDialog;
  }
  constructor(
    private fb: FormBuilder,
    // private notification: NotificationService,
    private userService: UserService
  ) {
    this.usersForm = this.fb.group({
      id: [null],
      fullName: [null, [Validators.required]],
      // email: [null, [Validators.required, Validators.email]],
      // phoneNo: [null],
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      disable:false
      // hisCode: [null],
    });
    this.usersFormEdit = this.fb.group({
      id: [null],
      fullname: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      enable: true,
      // enable: [null],
    });
    // this.accountForm = this.fb.group({
    //   username: [null, [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]],
    // });

  }
  ngOnInit(): void {
    this.cols = [
      { field: 'fullname', header: 'Họ và tên', isOpSort: true, iconSort : 0, width: '15rem' },
      { field: 'username', header: 'Tài khoản', isOpSort: true, iconSort : 0, width: '25rem' },
      // { field: 'role', header: 'Role', isOpSort: true, iconSort : 0, width: '15rem' },
      // { field: 'action', header: 'Action',width: '15rem' },
    //   { field: 'email', header: 'Email', isOpSort: true, iconSort : 0, width: '50rem' },
    ];
    // this.search();
  }

  // search() {
  //   this.loading = true;
  //   this.userService.getUsers(this.searchData).subscribe({
  //     next: (res) => {
  //       if (res.isValid) {
  //         this.users = res.jsonData.data
  //         this.total = res.jsonData.total;
  //       }else{
  //           if(res.errors && res.errors.length > 0){
  //               res.errors.forEach((el: any) => {
  //                   // this.notification.error(el.errorMessage)
  //               })
  //           }else{
  //               // this.notification.error('Tìm kiếm không thành công')
  //           }
  //       }
  //     },
  //   })
  //     .add(() => {
  //       this.loading = false;
  //     });
  // }

  resetSearch() {
    this.searchData = {
      skip: 0,
      take: 40,
      username: '',
    };
    // this.search();
  }

  // onPageChange(data: any) {
  //   this.searchData.skip = data.first;
  //   this.searchData.take = data.rows;
  //   this.search();
  // }
  selectUser(user: any) {
    this.selectedUser = user;
}
  onCreatUser() {
    this.usersForm.patchValue({
      id: 0,
      fullName: '',
      username: '',
      password: '',
      repass: '',
      role:'Admin'
    });
    this.isVisibleUserDialog = true;
    this.userDialogHeader = 'Thêm tài khoản mới';
  }
  saveItem() {
    if (this.usersForm.valid) {
      this.createUser();
    } else {
      Object.values(this.usersForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  createUser() {
    const formValue = this.usersForm.value;
    const payload = {
      username: formValue.username,
      fullName: formValue.fullName,
      password: formValue.password,
      role:"Admin",
      disable:false
    };
    console.log(payload)
    this.userService.addUser(payload).subscribe({
      next: (res) => {
        if (res.isValid) {
          // this.notification.success('Thêm mới user thành công', '');
          this.isVisibleUserDialog = false;
          // this.search();
        }else{
            if(res.errors && res.errors.length > 0){
                res.errors.forEach((el: any) => {
                    // this.notification.error(el.errorMessage)
                })
            }else{
                // this.notification.error('Thêm mới user không thành công')
            }
        }
      }
    });
  }
  onDeleteUser(item: any) {
    this.deleteUserId = item.id
    this.textDeleteUser=`Xác nhận xóa tài khoản <b> ${item.fullname}</b>?`;
    this.isVisibleDeleteUserDialog = true;
    this.confirmLabelDelete = "Delete";
    }
    deleteUser() {
      this.userService.deleteById(this.deleteUserId).subscribe({
        next: (res) => {
          if (res.isValid) {
            // this.notification.success('Delete User thành công', '');
            this.isVisibleDeleteUserDialog = false;
            // this.search();
          } else {
              if(res.errors && res.errors.length > 0){
                  res.errors.forEach((el: any) => {
                      // this.notification.error(el.errorMessage)
                  })
              }else{
                  // this.notification.error('Delete User không thành công')
              }
          }
        }
      });
    }
}
