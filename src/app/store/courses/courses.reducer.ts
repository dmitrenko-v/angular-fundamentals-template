import {Action, createReducer, on} from '@ngrx/store';
import {Course} from "@app/types/Course";
import {
    requestAllCourses,
    requestAllCoursesFail,
    requestAllCoursesSuccess, requestCreateCourse, requestCreateCourseFail, requestCreateCourseSuccess,
    requestDeleteCourse,
    requestDeleteCourseFail,
    requestDeleteCourseSuccess,
    requestEditCourse, requestEditCourseFail,
    requestEditCourseSuccess,
    requestFilteredCourses,
    requestFilteredCoursesFail,
    requestFilteredCoursesSuccess,
    requestSingleCourse,
    requestSingleCourseFail,
    requestSingleCourseSuccess
} from "@app/store/courses/courses.actions";

export const coursesFeatureKey = 'courses';
export interface CoursesState {
    allCourses: Course[] | null,
    course: Course | null,
    isAllCoursesLoading: boolean,
    isSingleCourseLoading: boolean,
    isSearchState: boolean,
    errorMessage?: string
}

export const initialState: CoursesState = {
    allCourses: null,
    course: null,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: undefined
};

export const coursesReducer = createReducer(
    initialState,
    on(requestAllCourses, (state) => ({...state})),
    on(requestAllCoursesSuccess, (state, {courses}) => ({...state, courses})),
    on(requestAllCoursesFail, (state, {error}) => ({...state, errorMessage: error})),
    on(requestSingleCourse, (state) => ({...state})),
    on(requestSingleCourseSuccess, (state, {course}) => ({...state, course})),
    on(requestSingleCourseFail, (state, {error}) => ({...state, errorMessage: error})),
    on(requestFilteredCourses, (state) => ({...state})),
    on(requestFilteredCoursesSuccess, (state, {courses}) => ({...state, courses})),
    on(requestFilteredCoursesFail, (state, {error}) => ({...state, errorMessage: error})),
    on(requestDeleteCourse, (state) => ({...state})),
    on(requestDeleteCourseSuccess, (state) => ({...state})),
    on(requestDeleteCourseFail, (state, {error}) => ({...state, errorMessage: error})),
    on(requestEditCourse, (state) => ({...state})),
    on(requestEditCourseSuccess, (state, {course}) => ({...state, course})),
    on(requestEditCourseFail, (state, {error}) => ({...state, errorMessage: error})),
    on(requestCreateCourse, (state) => ({...state})),
    on(requestCreateCourseSuccess, (state, {course}) => ({...state, course})),
    on(requestCreateCourseFail, (state, {error}) => ({...state, errorMessage: error})),
)

export const reducer = (state: CoursesState, action: Action): CoursesState => coursesReducer(state, action);
