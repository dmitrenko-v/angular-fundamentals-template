import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {AuthorizedGuard} from "@app/auth/guards/authorized.guard";
import {NotAuthorizedGuard} from "@app/auth/guards/not-authorized.guard";

export const routes: Routes = [
    { 
        path: 'login',
        canActivate: [NotAuthorizedGuard],
        loadChildren: () => import('./shared/components/login-form/login-form.module').then(m => m.LoginFormModule)
    },
    {
        path: 'register',
        canActivate: [NotAuthorizedGuard],
        loadChildren: () => import('./shared/components/registration-form/registration-form.module').then(m => m.RegistrationFormModule)
    },
    {
        path: 'courses',
        canLoad: [AuthorizedGuard],
        loadChildren: () => import('./features/courses-list/courses-list.module').then(m => m.CoursesListModule)
    },
    {
        path: "courses/edit/:id",
        canLoad: [AuthorizedGuard],
        loadChildren: () => import('./shared/components/course-form/course-form.module').then(m => m.CourseFormModule)
    },
    {
        path: "courses/:id",
        canLoad: [AuthorizedGuard],
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
