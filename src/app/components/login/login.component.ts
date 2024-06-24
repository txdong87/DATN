import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

const nonWhiteSpaceRegExp: RegExp = new RegExp("\\S");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(nonWhiteSpaceRegExp)]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Invalid input' });
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res)
        localStorage.setItem('authToken', res.token);
        localStorage.setItem('role', res.role);
        if(res.role==="Admin"){
          this.router.navigate(['/admin']);
        }else if(res.role==="Doctor"){
        this.router.navigate(['/common/doctor']);
        } else if(res.role==="Nurse"){
          this.router.navigate(['/common/main-nurse']);
        }else {
          this.router.navigate(['/common/ktv']);
        }
      },
      (error: any) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: error.error });
      }
    );
  }

  onClick() {
    this.router.navigate(['signup']);
  }
}
