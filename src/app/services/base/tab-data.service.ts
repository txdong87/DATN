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
  ]);
  public contentVal = this.content;
  public share = this.content.asObservable();
  //private _groupId = '';
  //public sharegroup = new BehaviorSubject("sharegroup");
  private currIdSource = new BehaviorSubject('ListVisit');
  public currentTabId = this.currIdSource.asObservable();

  constructor() {
    let tabs = this.content.getValue();
    this.content.next(tabs);
  }

  updateTab(id:any, patientName:any, tabType:any): void {
    var checkid = true;
    this.changeTab(id);
    let tabs = this.content.getValue();
    let len = tabs.length;
    console.log(tabs)
    for (let i = 0; i < len; i++) {
     
      if (tabs[i].id === id) {
        console.log(1111)
        this.indextab = i;
        tabs.splice(i, 1, { id: id, name: patientName, tabType: tabType });
       
        checkid = true;
        console.log(tabs)
        return;
      }
      this.content.next(tabs);
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
