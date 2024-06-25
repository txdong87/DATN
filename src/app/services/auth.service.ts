import { Router } from '@angular/router';

import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends BaseService {
 
  // public isLoggedIn: boolean = false;
  isLoggedIn(): boolean {
    return false
  }
  login(payload: any): Observable<any> {
    return this.post('/api/Auth/Login', payload).pipe(
      tap((response: any) => {
        if (response && response.token) {
          this.setToken(response.token);
          
        }
      })
    );
  }
  logout(): void {
    this.clearToken();
   
    // this.isLoggedIn = false;
    
  }

  private setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
  private getRole(token: string): void {
    localStorage.setItem('Role', token);
  }
  private clearToken(): void {
    localStorage.removeItem('authToken');
  }
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  // logout(): Observable<any> {
  //   let token = localStorage.getItem(Constants.FIREBASE_TOKEN);
  //   let headers = { 'FB_Token': token };

  //   return this.post('/logout', null, {}, '', headers);
  // }
}