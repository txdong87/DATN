import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  login(payload: any): Observable<any> {
    return this.post('/api/Auth/Login', payload).pipe(
      tap((response: any) => {
        if (response && response.token) {
          this.setToken(response.token);
          this.setRole(response.role); // Đảm bảo lưu vai trò của người dùng
        }
      })
    );
  }

  logout(): void {
    this.clearToken();
    this.clearRole();
  }

  private setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  

  private setRole(role: string): void {
    localStorage.setItem('role', role);
  }

  private getRole(): string | null {
    return localStorage.getItem('role');
  }

  private clearToken(): void {
    localStorage.removeItem('authToken');
  }

  private clearRole(): void {
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getRoleFromStorage(): string | null {
    return this.getRole();
  }
}
