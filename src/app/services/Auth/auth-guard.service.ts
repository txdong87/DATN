
import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot ,CanActivate,RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {
  constructor(public auth: AuthService, public router: Router,public messageService:MessageService) {}
  canActivate=(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    )=> {
      if (!this.auth.isAuthenticated()) {
        this.messageService.add({key:'tc', severity: 'warn', summary: 'Warn', detail: 'You must login' });
        // this.router.navigate(['login']);
        return false;
      }
      return true;
    }
}

