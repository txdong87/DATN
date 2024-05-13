import { Component, ViewChild,ChangeDetectorRef, OnDestroy, OnInit  } from '@angular/core';
import { TabDataService } from 'src/app/services/base/tab-data.service';
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
  currentTabId: string|any;
  tabs:any[]=[];
  constructor(
    private tabDataService: TabDataService,
    private cdr: ChangeDetectorRef,
  ){
    this.tabDataService.currentTabId.subscribe((id) => {
        this.currentTabId = id;
      });
  }
  toggleSideBar() {
    this.isExpanding = !this.isExpanding;
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
  }
itemClick(event: Event) {
    // avoid processing disabled items
    
}

}

