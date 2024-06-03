import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private currIdSource = new BehaviorSubject('ListVisit');
  public currentTabId = this.currIdSource.asObservable();

  constructor() {}

  updateTab(id: any, patientName: any, tabType: any): void {
    this.changeTab(id);
    let tabs = this.content.getValue();
    let tabExists = false;
    
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].id === id) {
        this.indextab = i;
        tabs[i] = { id: id, name: patientName, tabType: tabType };
        tabExists = true;
        break;
      }
    }
    
    if (!tabExists) {
      this.indextab = tabs.length;
      tabs.push({ id: id, name: patientName, tabType: tabType });
    }

    this.content.next(tabs); // Ensure the updated tabs are emitted
  }

  closeTab(data: any): void {
    let tabs = this.content.getValue();
    let index = tabs.findIndex(tab => tab.id === data.id);
    if (index !== -1) {
      tabs.splice(index, 1);
      if (data.id == this.currIdSource.getValue() && tabs.length > 0) {
        let currId = tabs[tabs.length - 1].id;
        this.changeTab(currId);
      }
      this.content.next(tabs); // Ensure the updated tabs are emitted
    }
  }

  changeGroup(): void {
    this.currIdSource.next('ListVisit'); // reload sidebar menu khi thay đổi nhóm
    this.content.next([{ id: 'ListVisit', name: 'Danh sách ca khám', tabType: 'main' }]); // xóa hết tab trừ tab danh sách
  }

  tabs(): any[] {
    return this.content.getValue();
  }

  getUserProfile() {
    return this.share.subscribe(
      () => {
        this.content.getValue();
      },
      () => {}
    );
  }

  changeTab(id: string): void {
    this.currIdSource.next(id);
  }

  replaceTab(curId: string, nextId: string): void {
    let tabs = this.content.getValue();
    let index = tabs.findIndex(tab => tab.id === curId);
    if (index !== -1) {
      tabs[index].id = nextId;
      this.content.next(tabs); // Ensure the updated tabs are emitted
    }
  }

  reInitTab(type: any, name: any): void {
    this.content.next([{ id: type, name: name, patientId: '' }]);
    this.changeTab('ListPatient');
  }
}
