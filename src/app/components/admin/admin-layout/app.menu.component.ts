import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Danh sách người dùng', icon: 'pi pi-fw pi-id-card', routerLink: ['/list-user'] },
                    { label: 'Danh mục CDHA', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/list-cdha'] },
                    { label: 'Danh mục thuốc', icon: 'pi pi-fw pi-box', routerLink: ['/list-medication'] },
                ]
            },
          
               
        ];
    }
}
