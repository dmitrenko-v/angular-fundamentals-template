import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationFormComponent } from '@shared/components';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SharedModule } from "@shared/shared.module";
import {RegistrationFormRoutingModule} from "@shared/components/registration-form/registration-form-routing.module";

@NgModule({
    declarations: [
        RegistrationFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RegistrationFormRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class RegistrationFormModule { }
