import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { environment } from './environments/environment';
import { Injectable, Type, CompilerOptions, NgModuleRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AppConfig } from './models/app.config';

@Injectable()
export class AppConfigService {
  private config: AppConfig;
  private env: Object;

  constructor(private http: HttpClient) {
    this.env = "development"
    this.config = new AppConfig();
    }
  
  static bootstrap<TM>(moduleType: Type<TM>, compilerOptions?: CompilerOptions | CompilerOptions[]): Promise<NgModuleRef<TM>> {
    return platformBrowserDynamic().bootstrapModule(moduleType, compilerOptions);
  }
  /*
   * Loads the environment config file first. Reads the environment variable from the file
   * and based on that loads the appropriate configuration file - development or production
   */
 
  load() {
    return new Promise((resolve) => {
      const options = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          DataType: 'application/json',
        },
      };
      this.env = {
        env: "development"
      };
      this.http.get(`./assets/config/${"development"}.json`, options).subscribe(
        (data: any) => {
          this.setConfig(data);
          resolve(true);
        },
        (err) => this.errorHandler(err)
      );
    });
  }
  private setConfig = (data: any): void => {
    const appConfig = new AppConfig(); 
    appConfig.api = data.api; 
    this.config = appConfig;
};

  private errorHandler(error: HttpErrorResponse) {
  return throwError(error.message || 'Server Error');
}

/**
 * Returns environment variable based on given key
 *
 * @param key
 */
getEnv = (key: any) => {
  // return this.env[key];
};

/**
 * Returns app configuration value
 *
 */
getConfig = () => {
  return this.config;
};
}
