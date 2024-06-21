import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  messaged404 = false;
  constructor(private messageService: MessageService) {}
  info(summary: string, detail: string = '', key = 'default') {
    this.messageService.add({ severity: 'info', summary: summary, detail: detail, key: key });
  }
  success(summary: string, detail: string = '', key = 'default') {
    this.messageService.add({ severity: 'success', summary: summary, detail: detail, key: key });
  }
  warn(summary: string, detail: string = '', key = 'default') {
    this.messageService.add({ severity: 'warn', summary: summary, detail: detail, key: key });
  }
  error(summary: string, detail: string = '', key = 'default') {
    this.messageService.add({ severity: 'error', summary: summary, detail: detail, key: key });
  }
  add(type: string, summary: string, detail: string = '', key = 'default', sticky = false) {
    this.messageService.add({ key: key, severity: type, summary: summary, detail: detail, sticky: sticky });
  }
  firebase(summary: string, detail: string = '') {
    this.messageService.add({ summary: summary, detail: detail, key: 'firebase', severity: 'info', sticky: false, life: 10000 });
  }
  error404(summary: string, detail: string = '', key = 'default') {
    if (!this.messaged404) {
      this.messageService.add({ severity: 'error', summary: summary, detail: detail, key: key });
    }
    this.messaged404 = true;
    setTimeout(() => {
      this.messaged404 = false;
    }, 3000);
  }
  getErrorsMessage(res:any,message:string){
    if (res.errors && res.errors.length > 0) {
        res.errors.forEach((el: any) => {
          this.error(el.errorMessage);
        });
      } else {
        this.error(message);
      }
  }
}
