import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule here
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './app.topbar.component';
// import { AppConfigModule } from './config/config.module';
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppLayoutComponent } from "./app.layout.component";

@NgModule({
  declarations: [
    AppMenuitemComponent,
    AppTopBarComponent,
    AppMenuComponent,
    AppSidebarComponent,
    AppLayoutComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    CommonModule, // Add CommonModule here
    AdminLayoutRoutingModule
  ],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
