import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "@app/auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild("loginForm") public loginForm!: NgForm;
  
  constructor(private authService: AuthService, private router: Router) {
  }
  
  credentials = {
    email: "",
    password: ""
  }
  
  login() {
    this.authService.login(this.credentials)
    this.router.navigateByUrl("/courses")
  }
}
