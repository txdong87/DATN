import { AuthService } from 'src/app/services/auth.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    profileMenuItems!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,private authService:AuthService,private router: Router) { 
        this.profileMenuItems = [
            {
              label: 'Trang chủ',
              icon: 'pi pi-fw pi-home',
              routerLink: '/',
            },
            {
              separator: true,
            },
            {
              label: 'Đăng xuất',
              icon: 'pi pi-fw pi-power-off',
              command: () => this.signOut(),
            },
          ];
    }
    signOut() {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    
}
