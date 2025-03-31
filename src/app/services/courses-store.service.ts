import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Course} from "@app/types/Course";

@Injectable({
    providedIn: 'root'
})
export class CoursesStoreService {
    private courses$$ = new BehaviorSubject<Course[]>([]);
    private isLoading$$ = new BehaviorSubject<boolean>(false);
    
    public isLoading$ = this.isLoading$$.asObservable();
    public courses$ = this.courses$$.asObservable();
    
    getAll(){
        // Add your code here
    }

    createCourse(course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    getCourse(id: string) {
        // Add your code here
    }

    editCourse(id: string, course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    deleteCourse(id: string) {
        // Add your code here
    }

    filterCourses(value: string) {
        // Add your code here
    }

    getAllAuthors() {
        // Add your code here
    }

    createAuthor(name: string) {
        // Add your code here
    }

    getAuthorById(id: string) {
        // Add your code here
    }
}
