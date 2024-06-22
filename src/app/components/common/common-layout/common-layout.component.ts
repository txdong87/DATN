import { AuthService } from 'src/app/services/auth.service';
import { Component, ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';
import { TabDataService } from 'src/app/services/base/tab-data.service';
import { LayoutService } from '../../admin/admin-layout/service/app.layout.service';
import { TabView } from 'primeng/tabview';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css'],
})
export class CommonLayoutComponent implements OnInit {
  indexTab = 0;
  model: any[] = [];
  isExpanding = true;
  isSidebarHidden = true;
  currentTabId: string | any;
  tabs: any[] = [];
  role :string|any;  
  @ViewChild('tabView') tabView!: TabView;

  newPatient: any; // Biến để lưu bệnh nhân mới

  constructor(
    private tabDataService: TabDataService,
    private cdr: ChangeDetectorRef,
    private layoutService: LayoutService,
    private authService:AuthService,
    private router :Router
  ) {
    this.tabDataService.currentTabId.subscribe((id) => {
      this.currentTabId = id;
    });
  }

  ngOnInit() {
    this.role = localStorage.getItem('role');
    console.log(this.role)
    if (this.role) {
      this.setMainTab();
    } else {
      console.error('Failed to retrieve role from localStorage');
    }
  }

  setMainTab() {
    if (this.role === 'Doctor' || this.role==='Admin') {
      this.tabs = [
        { id: 'ListCaseStudy', name: 'Ca khám bác sĩ', tabType: 'main' },
      ];
    } else if (this.role === 'Nurse'|| this.role==='Admin') {
      this.tabs = [
        { id: 'ListVisit', name: 'Danh sách ca khám', tabType: 'main' },
        // { id: 'AddPatient', name: 'Thêm bệnh nhân', tabType: 'extra' },
        // { id: 'ListPatient', name: 'Danh sách bệnh nhân', tabType: 'extra' },
      ];
    }
    this.indexTab = 0;
    this.cdr.detectChanges(); // Detect changes for tab updates
  }

  getTabs() {
    this.tabDataService.share.subscribe(() => {
      this.tabs = this.tabDataService.tabs();
      this.indexTab = this.tabDataService.indextab;
      this.setMainTab();
      this.cdr.detectChanges();
    });
  }

  // setMainTab() {
  //   if (this.role === 'doctor') {
  //     this.tabs = [
  //       { id: 'ListCaseStudy', name: 'Ca khám bác sĩ', tabType: 'main' },
  //     ];
  //   } else if (this.role === 'nurse') {
  //     this.tabs = [
  //       { id: 'ListVisit', name: 'Danh sách ca khám', tabType: 'main' },
  //       // { id: 'AddPatient', name: 'Thêm bệnh nhân', tabType: 'extra' },
  //       // { id: 'ListPatient', name: 'Danh sách bệnh nhân', tabType: 'extra' },
  //     ];
  //   }
  //   this.indexTab = 0;
  //   this.cdr.detectChanges();
  // }

  toggleSideBar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  closeTab(tab: any): void {
    this.tabDataService.closeTab(tab);
    this.updateIndexTab();
  }

  openNewTab(id: string, tab: string, type: string) {
    this.tabDataService.updateTab(id, tab, type);
    this.indexTab = this.tabDataService.indextab;
    this.cdr.detectChanges();
    this.tabView.activeIndex = this.indexTab;
  }

  updateIndexTab(): void {
    this.indexTab = this.tabDataService.indextab;
    this.cdr.detectChanges();
  }

  onTabChange(event: any): void {
    this.indexTab = event.index;
  }

  itemClick(event: Event) {
    // avoid processing disabled items
  }

  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config().colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config().colorScheme === 'dark',
      'layout-overlay': this.layoutService.config().menuMode === 'overlay',
      'layout-static': this.layoutService.config().menuMode === 'static',
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config().menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config().inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config().ripple
    };
  }

  hasRole(role: string) {
    return this.role === role;
  }
  // getRole(){
  //   this.authService
  // }
  logOut(){
    this.authService.logout()
    this.router.navigate(['/login']);
  }
  onPatientAdded(newPatient: any) {
    this.newPatient = newPatient; // Cập nhật biến với bệnh nhân mới
    this.openNewTab('ListVisit', 'Danh sách ca khám', 'main'); // Chuyển đến tab "Danh sách ca khám"
  }
}
