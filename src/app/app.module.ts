import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPagesComponent } from './components/admin/admin-pages/admin-pages.component';
import { AppLayoutModule } from './components/admin/admin-layout/app.layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AppConfig } from './models/app.config';
import { AppConfigService } from './shared/app-config.service';
import { NotificationModule } from './shared/component/notification/notification.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NotificationModule
    
  ],
  providers: [MessageService,AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
