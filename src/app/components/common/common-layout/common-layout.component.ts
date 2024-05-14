import { Component, ViewChild,ChangeDetectorRef, OnDestroy, OnInit  } from '@angular/core';
import { TabDataService } from 'src/app/services/base/tab-data.service';
import { LayoutService } from '../../admin/admin-layout/service/app.layout.service';
@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrl: './common-layout.component.css',
  providers: [TabDataService],
})
export class CommonLayoutComponent implements OnInit{
  indexTab = 0;
  model: any[] = [];
  isExpanding = true;
  isSidebarHidden = true;
  currentTabId: string|any;
  tabs:any[]=[];
  constructor(
    private tabDataService: TabDataService,
    private cdr: ChangeDetectorRef,
    private layoutService:LayoutService
  ){
    this.tabDataService.currentTabId.subscribe((id) => {
        this.currentTabId = id;
      });
  }
  toggleSideBar() {
    // this.isExpanding = !this.isExpanding;
    this.isSidebarHidden = !this.isSidebarHidden;
  }
 
  sidebarVisible: boolean = true;
  ngOnInit() {
    this.getTabs()
    this.model = [
        {
            label: 'Danh sách ca khám',
            routerLink: ['/']
        },
       
    ];
}
getTabs() {
    this.tabDataService.share.subscribe(() => {
      this.tabs = this.tabDataService.tabs();
    })
    this.indexTab = this.tabDataService.indextab;
    this.cdr.detectChanges()
}
closeTab(tab: any): void {
    this.tabDataService.closeTab(tab);
  }
  openNewTab(id: string, tab: string, type: string) {
    this.tabDataService.updateTab(id, tab, type);
    this.indexTab = this.tabDataService.indextab;
    console.log(this.indexTab)
    console.log(tab,id,type)
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
  }
}
}

