import { Injectable } from '@angular/core';
import {CoursesService} from "@app/services/courses.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
    requestAllCourses,
    requestAllCoursesFail,
    requestAllCoursesSuccess,
    requestCreateCourse,
    requestCreateCourseFail,
    requestCreateCourseSuccess,
    requestDeleteCourse,
    requestDeleteCourseFail,
    requestDeleteCourseSuccess,
    requestEditCourse, requestEditCourseFail,
    requestEditCourseSuccess,
    requestFilteredCourses,
    requestFilteredCoursesFail,
    requestFilteredCoursesSuccess,
    requestSingleCourse, requestSingleCourseFail,
    requestSingleCourseSuccess
} from "@app/store/courses/courses.actions";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class CoursesEffects {
    constructor(private coursesService: CoursesService, private actions$: Actions, private router: Router) {}

    getAll$ = createEffect(() => this.actions$.pipe(
        ofType(requestAllCourses),
        mergeMap(() => this.coursesService.getAll()
            .pipe(
                map(result => requestAllCoursesSuccess({courses: result.result})),
                catchError((err) => of(requestAllCoursesFail(err)))
            )
        )
        )
    )

    filteredCourses$ = createEffect(() => this.actions$.pipe(
            ofType(requestFilteredCourses),
            mergeMap(({ title }) => this.coursesService.filterCourses(title)
                .pipe(
                    map(result => requestFilteredCoursesSuccess({courses: result.result})),
                    catchError((err) => of(requestFilteredCoursesFail(err)))
                )
            )
        )
    )

    getSpecificCourse$ = createEffect(() => this.actions$.pipe(
            ofType(requestSingleCourse),
            mergeMap(({ id }) => this.coursesService.getCourse(id)
                .pipe(
                    map(result => requestSingleCourseSuccess({course: result.result})),
                    catchError((err) => of(requestSingleCourseFail(err)))
                )
            )
        )
    )

    deleteCourse$ = createEffect(() => this.actions$.pipe(
            ofType(requestDeleteCourse),
            mergeMap(({id}) => this.coursesService.deleteCourse(id)
                .pipe(
                    map(() => requestDeleteCourseSuccess()),
                    catchError((err) => of(requestDeleteCourseFail(err)))
                )
            )
        )
    )

    editCourse$ = createEffect(() => this.actions$.pipe(
            ofType(requestEditCourse),
            mergeMap(({id, course}) => this.coursesService.editCourse(id, course)
                .pipe(
                    map(() => requestEditCourseSuccess({course: course})),
                    catchError((err) => of(requestEditCourseFail(err)))
                )
            )
        )
    )

    createCourse$ = createEffect(() => this.actions$.pipe(
            ofType(requestCreateCourse),
            mergeMap(({course}) => this.coursesService.createCourse(course)
                .pipe(
                    map(() => requestCreateCourseSuccess({course: course})),
                    catchError((err) => of(requestCreateCourseFail(err)))
                )
            )
        )
    )

    redirectToTheCoursesPage$ = createEffect(() => this.actions$.pipe(
            ofType(requestCreateCourseSuccess, requestEditCourseSuccess, requestSingleCourseFail),
            tap(() => this.router.navigateByUrl("/courses"))
        ),
        {dispatch: false}
    )
}
