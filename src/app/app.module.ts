import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPagesComponent } from './components/admin/admin-pages/admin-pages.component';
import { AppLayoutModule } from './components/admin/admin-layout/app.layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

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
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
