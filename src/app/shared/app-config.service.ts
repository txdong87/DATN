import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { environment } from './environments/environment';
import { Injectable, Type, CompilerOptions, NgModuleRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AppConfig } from '../models/app.config';

@Injectable()
export class AppConfigService {
  private config: AppConfig;
  private options = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        DataType: 'application/json',
    },
};
  constructor(private http: HttpClient) {
    this.config = new AppConfig();
    }
  
  static bootstrap<TM>(moduleType: Type<TM>, compilerOptions?: CompilerOptions | CompilerOptions[]): Promise<NgModuleRef<TM>> {
    return platformBrowserDynamic().bootstrapModule(moduleType, compilerOptions);
  }
 
  load() {
    return new Promise((resolve, reject) => {
        this.http
            .get(
                `../../assets/config/development.json`,
                this.options
            )
            .subscribe({
                next: (data: any) => {
                    this.setConfig(data);
                },
                error: (error) => {
                    //console.log('error', error);
                    throw new Error(error.message || 'Server Error');
                },
            });
    });
}
  private setConfig = (data: any): void => {
    const appConfig = new AppConfig(); 
    appConfig.api = data.api; 
    this.config = appConfig;
    console.log(this.config)
};

  private errorHandler(error: HttpErrorResponse) {
  return throwError(error.message || 'Server Error');
}

/**
 * Returns environment variable based on given key
 *
 * @param key
 */

/**
 * Returns app configuration value
 *
 */
getConfig = () => {
  this.config={
    "api": {
    "baseUrl": "https://localhost:44308",
    "fileUrl": "https://localhost:44308"
  }
}
  return this.config;
  
};
}
