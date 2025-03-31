import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "@shared/shared.module";
import {CourseFormComponent} from "@shared/components";
import {CourseFormRoutingModule} from "@shared/components/course-form/course-form-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [
        CourseFormComponent
    ],
    imports: [
        CommonModule,
        CourseFormRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ]
})
export class CourseFormModule { }
