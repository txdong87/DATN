import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/app-config.service';
// import { Constant } from '../constants/constant.class';

@Injectable()
export class BaseService {
  constructor(public httpClient: HttpClient, protected configService: AppConfigService) {}
  get(url: string, params?: {}, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.get(this.configService.getConfig().api.baseUrl + url, {
          headers: this.createHeaders().set('skipLoading', 'true') || {},
          params,
          responseType: 'text',
        });
      case 'blob':
        return this.httpClient.get(this.configService.getConfig().api.baseUrl + url, {
          headers: this.createHeaders().set('skipLoading', 'true') || {},
          params,
          responseType: 'blob',
        });
      default:
        return this.httpClient.get(this.configService.getConfig().api.baseUrl + url, {
          headers: this.createHeaders().set('skipLoading', 'true') || {},
          params,
        });
    }
  }

  /**
   * Create a new entity.
   * @param url the api url
   * @param data the entity to create
   */
  post(url: string, data: any, params?: {}, responseType?: string, headers?: {}): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.post(this.configService.getConfig().api.baseUrl + url, data, {
          headers: this.createHeaders(headers) || {},
          responseType: 'text',
          params,
        });
      case 'blob':
        return this.httpClient.post(this.configService.getConfig().api.baseUrl + url, data, {
          headers: this.createHeaders(headers) || {},
          responseType: 'blob',
          params,
        });
      case 'arraybuffer':
        return this.httpClient.post(this.configService.getConfig().api.baseUrl + url, data, {
          headers: this.createHeaders(headers) || {},
          responseType: 'blob',
          params,
        });
      default:
        return this.httpClient.post(this.configService.getConfig().api.baseUrl + url, data, {
          headers: this.createHeaders(headers) || {},
          params,
        });
    }
  }

  /**
   * Update an entity.
   * @param url the api url
   * @param data the entity to be updated
   */
  put(url: string, data: any, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.put(this.configService.getConfig().api.baseUrl + url, data, {
          headers: this.createHeaders() || {},
          responseType: 'text',
        });
      default:
        return this.httpClient.put(this.configService.getConfig().api.baseUrl + url, data, {
          headers: this.createHeaders() || {},
        });
    }
  }

  /**
   * Delete an entity.
   * @param url the api url
   * @param id the entity id to be deleted
   */
  delete(url: string, id: any, responseType?: string, params?:any|null): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.delete(this.configService.getConfig().api.baseUrl + url, {
          headers: this.createHeaders() || {},
          responseType: 'text',
          params: params,
        });
      default:
        return this.httpClient.delete(this.configService.getConfig().api.baseUrl + url, {
          headers: this.createHeaders() || {},
          params: params,
        });
    }
  }

  public createHeaders(headers?:any|null): HttpHeaders {
    // Why "authorization": see CustomLogoutSuccessHandler on server
    let requestHeader = new HttpHeaders();
    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        requestHeader = requestHeader.set(key, (value as any).toString());
      }
    }
    requestHeader = requestHeader.set('Authorization', 'Bearer ' + this.getToken());
    return requestHeader;
    // return new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
  }
  private getToken(): string {
    const token = localStorage.getItem("token");
    if (token === null) {
        throw new Error("Token not found in localStorage");
    }
    return token;

  }

  protected getLocalStorage(key: string): string {
    const local = localStorage.getItem(key);
    if (local === null) {
        throw new Error("Token not found in localStorage");
    }
    return local;
  }
}
