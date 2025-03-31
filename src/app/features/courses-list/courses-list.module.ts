import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from "@features/courses-list/courses-list.component";
import { CoursesListRoutingModule } from "@features/courses-list/courses-list-routing.module";
import {SharedModule} from "@shared/shared.module";

@NgModule({
    declarations: [
        CoursesListComponent
    ],
    imports: [
        CommonModule,
        CoursesListRoutingModule,
        SharedModule
    ]
})
export class CoursesListModule { }
