import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "@app/types/Course";
import {Observable} from "rxjs";
import {Author} from "@app/types/Author";

interface GetAllCoursesResult {
    successful: boolean,
    result: Course[]
}

interface GetOneCourseResult {
    successful: boolean,
    result: Course
}

interface GetAllAuthorsResult {
    successful: boolean,
    result: Author[]
}

interface GetOneAuthorResult {
    successful: boolean,
    result: Author
}

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private coursesUrl = "http://localhost:4000/courses";
    private authorsUrl = "http://localhost:4000/authors";
    
    constructor(private httpClient: HttpClient) {}
    getAll(): Observable<GetAllCoursesResult> {
        return this.httpClient.get<GetAllCoursesResult>(`${this.coursesUrl}/all`);
    }

    createCourse(course: Course) { 
        return this.httpClient.post(`${this.coursesUrl}/add`, course)
    }

    editCourse(id: string, course: Course) { 
        return this.httpClient.put(`${this.coursesUrl}/${id}`, course)
    }

    getCourse(id: string) : Observable<GetOneCourseResult> {
        return this.httpClient.get<GetOneCourseResult>(`${this.coursesUrl}/${id}`);
    }

    deleteCourse(id: string) {
        return this.httpClient.delete(`${this.coursesUrl}/${id}`);
    }

    filterCourses(value: string): Observable<GetAllCoursesResult> {
        return this.httpClient.get<GetAllCoursesResult>(`${this.coursesUrl}/filter?title=${value}`);
    }

    getAllAuthors() : Observable<GetAllAuthorsResult> {
        return this.httpClient.get<GetAllAuthorsResult>(`${this.authorsUrl}/all`);
    }

    createAuthor(name: string) {
        return this.httpClient.post(`${this.authorsUrl}/add`, {name})
    }

    getAuthorById(id: string) : Observable<GetOneAuthorResult> {
        return this.httpClient.get<GetOneAuthorResult>(`${this.authorsUrl}/${id}`);
    }
}
