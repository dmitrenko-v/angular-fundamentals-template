import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginFormComponent } from '@shared/components';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginFormRoutingModule,
    FormsModule,
  ]
})
export class LoginFormModule { }
