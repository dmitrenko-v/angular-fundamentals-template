import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from "@features/course-info/course-info.component";

const routes: Routes = [{ path: '', component: CourseInfoComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseInfoRoutingModule { }
