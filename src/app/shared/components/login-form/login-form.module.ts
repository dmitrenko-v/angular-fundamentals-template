import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginFormComponent } from '@shared/components';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@shared/shared.module";
import {AuthModule} from "@app/auth/auth.module";

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginFormRoutingModule,
    FormsModule,
      AuthModule
  ]
})
export class LoginFormModule { }
