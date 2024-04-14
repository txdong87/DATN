import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { BaseService } from '../base/base.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
// import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
// const jwtHelper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor(private http: HttpClient) {
   
  }
  // loginUser(item: any) {
  //   return
  //   // return this.http.post<any>(`${this.apiUrl}/login`, item, {
  //   //   });
  // }
  signUpUser(item : any){
    // return this.http.post<any>(`${this.apiUrl}/register`, item, {
    // });
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
return true
    // return !this.jwtHelper.isTokenExpired(token);
  }
  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('cartItems')
  
  }
}