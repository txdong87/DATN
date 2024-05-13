import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { AppState } from 'src/app/components/app-state/app-state';
// import { AuthModel } from 'src/app/models/auth.model';
// import { Constant } from '../constants/constant.class';
@Injectable({
  providedIn: 'root',
})
export class TabDataService {
  public indextab = 0; // select the last tab to display
  private content = new BehaviorSubject<Array<any>>([
    { id: 'ListVisit', name: 'Danh sách ca khám', tabType: 'main' },
    // {id :"cknoi", name:"Danh sách giường bệnh nội trú", tabType:"main"},
    // {id :"dslh", name:"Danh sách lịch hẹn", tabType:"extra"},
    // {id :"invoice", name:"Danh sách hóa đơn", tabType:"extra"},
    // {id :"prestriction", name:"Danh sách đơn thuốc", tabType:"extra"},
    // {id :"calandar", name:"Gán lịch làm việc của BS", tabType:"extra"},
    // {id :"discount", name:"Chiết khấu BS", tabType:"extra"}
  ]);
  public contentVal = this.content;
  public share = this.content.asObservable();
  //private _groupId = '';
  //public sharegroup = new BehaviorSubject("sharegroup");
  private currIdSource = new BehaviorSubject('ListVisit');
  public currentTabId = this.currIdSource.asObservable();
//   authUser: AuthModel;
//   readonly USERROLE: typeof Constant.USERROLE = Constant.USERROLE;

  constructor() {
    let tabs = this.content.getValue();
    // this.store.select('auth').subscribe((res) => {
    //   if (res.isAuthenticated) {
    //     this.authUser = res;
    //     let roleIds = Array<number>();
    //     roleIds = this.authUser.roleIds;
    //     // console.log('roleIds', tabs, roleIds);
    //     let isRemove = false;
    //     if (roleIds != null) {
    //       tabs.forEach((element) => {
    //         switch (element.id) {
    //           case 'ListVisit':
    //             if (roleIds.indexOf(this.USERROLE.OutPatientVisit) >= 0) break;
    //             else isRemove = true;
    //           case 'dslh':
    //             if (roleIds.indexOf(this.USERROLE.AppointmentManager) >= 0) break;
    //             else isRemove = true; //else tabs=tabs.filter(en=>en.id!==element.id);
    //           case 'invoice':
    //             if (roleIds.indexOf(this.USERROLE.InvoiceManager) >= 0) break;
    //             else isRemove = true;
    //           case 'prestriction':
    //             if (roleIds.indexOf(this.USERROLE.ImpExpMedicineManager) >= 0) break;
    //             else isRemove = true;
    //           case 'calandar':
    //             if (roleIds.indexOf(this.USERROLE.OutPatientVisit) >= 0) break;
    //             else isRemove = true;
    //           case 'discount':
    //             if (roleIds.indexOf(this.USERROLE.Doctor) >= 0) break;
    //             else isRemove = true;
    //           default:
    //             break;
    //         }
    //         if (isRemove) {
    //           tabs = tabs.filter((en) => en.id !== element.id);
    //           isRemove = false;
    //         }
    //       });
    //       if (tabs.length === 0) {
    //         tabs = [{ id: 'discount', name: 'Chiết khấu BS', tabType: 'main' }];
    //         this.currIdSource.next('discount'); //reload sidebar menu khi set tab CK bs là mặc định
    //       }
    //     } else tabs = [];
    //   }
    // });
    // this.content.next(tabs);
  }

  updateTab(id:any, patientName:any, tabType:any): void {
    var checkid = true;
    this.changeTab(id);
    let tabs = this.content.getValue();
    let len = tabs.length;
    for (let i = 0; i < len; i++) {
      if (tabs[i].id === id) {
        this.indextab = i;
        tabs.splice(i, 1, { id: id, name: patientName, tabType: tabType });
        this.content.next(tabs);

        // this.indextab = Number(i);
        // this.content.next(this.content.getValue().concat([{id : id, name : patientName, tabType : tabType, patientId: patientId, reload: false}]));
        // this.content.getValue().splice(this.content.getValue().length - 1, 1);
        checkid = false;
        return;
      }
    }
    if (checkid) {
      this.indextab = tabs.length;
      this.content.next(tabs.concat([{ id: id, name: patientName, tabType: tabType }]));
    }

    // console.log("", tabs);
  }

  closeTab(data:any) {
    this.content.getValue().splice(this.content.getValue().indexOf(data), 1);
    if (data.id == this.currIdSource.getValue()) {
      let arr = this.content.getValue();
      let currId = arr[arr.length - 1].id;
      this.changeTab(currId);
    }
  }

  changeGroup() {
    this.currIdSource.next('ListVisit'); //reload sidebar menu khi thay đổi nhóm
    this.content.getValue().splice(1, this.content.getValue().length); //xoa het tab tru tab danh sach
  }
  tabs() {
    let tabs = this.content.getValue();

    return tabs;
  }

  getUserProfile() {
    return this.share.subscribe(
      () => {
        this.content.getValue();
      },
      () => {}
    );
  }

  // set groupID(info:any){
  //   localStorage.setItem(Constant.CURRENT_GROUP_INFO, info);
  //   console.log('setinfo',info);
  //   this.sharegroup.next(info.id);
  //   this.doctorService.saveCurrentGroupId(info.id)
  //   // this._groupId = id;
  // }

  // get groupID(){
  //   console.log('info',localStorage.getItem(Constant.CURRENT_GROUP_INFO));
  //   let info= JSON.parse(localStorage.getItem(Constant.CURRENT_GROUP_INFO));

  //   if(info!=null)
  //     return info.id;
  //   else return '';
  // }

  changeTab(id: string) {
    this.currIdSource.next(id);
  }

  replaceTab(curId: string, nextId: string) {
    let curTab = this.content.getValue().filter((t) => t.id == curId);
    let index = this.content.getValue().indexOf(curTab);
    let nextTab = { ...curTab[0], ...{ id: nextId } };
    this.content.getValue().splice(index, 1, nextTab);
    this.content.next(this.content.getValue());
  }

  reInitTab(type:any, name:any) {
    this.content.next([{ id: type, name: name, patientId: '' }]);
    this.changeTab('ListPatient');
  }
}
