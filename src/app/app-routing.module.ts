import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

export const routes: Routes = [
    { 
        path: 'login',
        loadChildren: () => import('./shared/components/login-form/login-form.module').then(m => m.LoginFormModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./shared/components/registration-form/registration-form.module').then(m => m.RegistrationFormModule)
    },
    {
        path: 'courses',
        loadChildren: () => import('./features/courses-list/courses-list.module').then(m => m.CoursesListModule)
    },
    {
        path: "courses/edit/:id",
        loadChildren: () => import('./shared/components/course-form/course-form.module').then(m => m.CourseFormModule)
    },
    {
        path: "courses/:id",
        loadChildren: () => import('./features/course-info/course-info.module').then(m => m.CourseInfoModule)
    },
    {
        path: "**",
        redirectTo: "courses"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
