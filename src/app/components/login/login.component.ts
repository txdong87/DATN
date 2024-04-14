import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/services/Auth/auth.service';
import {MessageService} from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { Router } from '@angular/router';
// import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
const nonWhiteSpaceRegExp: RegExp = new RegExp("\\S");
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  public loginForm!: FormGroup
email: any;
password: any;

  constructor(private fb: FormBuilder,private http: HttpClient,private auth_service:AuthService, private messageService: MessageService,private router:Router){}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(nonWhiteSpaceRegExp)]],
      password: ['', [Validators.required]],
    });
  } 
  login(){
    // this.auth_service.loginUser(this.loginForm.value)
    // .subscribe((res:any) => {
    //   console.log(res,this.loginForm.value)
    //   localStorage.setItem("token",res.accessToken)
    //   this.router.navigate(['']);
    // },
    // (error:any) => {
    //   console.log(error)
    //   this.messageService.add({severity:"error", summary:error.error});

    // }
    // )
  }
  onClick(){
    this.router.navigate(['signup']);
  }

 
}
