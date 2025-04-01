import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {CoursesState} from "@app/store/courses/courses.reducer";
import {
    getAllCourses, getCourse,
    getCourses, getErrorMessage,
    isAllCoursesLoadingSelector,
    isSearchingStateSelector,
    isSingleCourseLoadingSelector
} from "@app/store/courses/courses.selectors";
import {
    requestAllCourses, requestCreateCourse, requestDeleteCourse,
    requestEditCourse,
    requestFilteredCourses,
    requestSingleCourse
} from "@app/store/courses/courses.actions";
import {Course} from "@app/types/Course";

@Injectable({
    providedIn: 'root'
})
export class CoursesStateFacade {
    constructor(private store: Store<CoursesState>) {
    }
    isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector))
    isSingleCourseLoading$ = this.store.pipe(select(isSingleCourseLoadingSelector))
    isSearchingState$ = this.store.pipe(select(isSearchingStateSelector))
    courses$ = this.store.pipe(select(getCourses))
    allCourses$ = this.store.pipe(select(getAllCourses))
    course$ = this.store.pipe(select(getCourse))
    errorMessage$ = this.store.pipe(select(getErrorMessage))
    
    getAllCourses() {
        this.store.dispatch(requestAllCourses())
    }
    
    getSingleCourse(id: string) {
        this.store.dispatch(requestSingleCourse({id}))
    }
    
    getFilteredCourses(searchValue: string) {
        this.store.dispatch(requestFilteredCourses({title: searchValue}))
    }
    
    editCourse(body: Course, id: string) {
        this.store.dispatch(requestEditCourse({id, course: body}))
    }
    
    createCourse(body: Course) {
        this.store.dispatch(requestCreateCourse({course: body}))
    }
    
    deleteCourse(id: string) {
        this.store.dispatch(requestDeleteCourse({id}))
    }
}
