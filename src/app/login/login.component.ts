import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm:FormGroup=new FormGroup<any>([]);
  errMessage;

  constructor(private loginService:LoginService,private router:Router) {
  }
  ngOnInit(): void {
    this.loginForm=new FormGroup<any>({
      email :new FormControl('', [Validators.email]),
      password :new FormControl('')
  });
  }

  onLogin() {
    const {email,password}=this.loginForm.value;

    if(this.loginService.login(email,password)){
      this.router.navigate(['contacts'])
    }
    else {
      this.errMessage="InValid Credentials"
    }
  }
}
