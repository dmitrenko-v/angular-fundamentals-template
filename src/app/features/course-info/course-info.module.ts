import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "@shared/shared.module";
import {CourseInfoComponent} from "@features/course-info/course-info.component";
import {CourseInfoRoutingModule} from "@features/course-info/course-info-routing.module";

@NgModule({
    declarations: [
        CourseInfoComponent
    ],
    imports: [
        CommonModule,
        CourseInfoRoutingModule,
        SharedModule
    ]
})
export class CourseInfoModule { }
