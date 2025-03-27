import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailValidatorDirective} from "@shared/directives/email.directive";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  
  constructor(private fb: FormBuilder) {
  }
  
  registrationForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(6)]],
    email: ["", [Validators.required, new EmailValidatorDirective()]],
    password: ["", Validators.required]
  })

  get name() {
    return this.registrationForm.controls["name"];
  }

  get email() {
    return this.registrationForm.controls["email"];
  }

  get password() {
    return this.registrationForm.controls["email"];
  }
}
