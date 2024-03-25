import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DATN';
  constructor(
    private primengConfig: PrimeNGConfig,
    // public  configService: AppConfigService,
    // private translateService: TranslateService,
  ) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    // this.translateService.setDefaultLang('vi');
  }
}
