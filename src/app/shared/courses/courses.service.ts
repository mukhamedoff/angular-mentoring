import { ROOT_URL } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OrderByPipe } from './../../order-by.pipe';
import { Injectable } from '@angular/core';
import { Course } from './course.interface';
import { mockedCourses } from './courses.mock';

const COURSE_URL = `${ROOT_URL}courses/`;
@Injectable({ providedIn: 'root' })
export class CoursesService {
    courses: Course[] = mockedCourses;

    constructor(
        public orderByName: OrderByPipe,
        private http: HttpClient
    ){}

    getList(page: number, displayLimit: number): Course[] {
        return this.courses.slice(0, page * displayLimit);
    }

    setList(courses: Course[]): void {
        this.courses = courses;
    }

    getAll(options?: object): Observable<object> {
        let url = COURSE_URL;
        if(options && Object.entries(options).length > 0) {
            url += `?${Object.entries(options).map(item => item.join('=')).join('&')}`;
        }

        return this.http.get(url);
    }
    
    private getCoursesLength(): number {
        return this.courses.length;
    }

    getOrdered(page: number, displayLimit: number): Course[] {
        return this.orderByName.transform(this.getList(page, displayLimit));
    }

    createCourse(name: string, length: number, description: string, isTopRated: boolean): Course {
        const course = {
            id: this.getCoursesLength() + 1,
            name,
            date: new Date(),
            length,
            description,
            authors: null,
            isTopRated
        };
        this.http.post(COURSE_URL, course)
            .subscribe();
        return course;
    }

    update(course: Course): Observable<any> {
        return this.http.patch(`${COURSE_URL}${course.id}`, course);
    }

    removeCourse(id: number): Observable<any> {
        return this.http.delete(`${COURSE_URL}${id}`)
    }

    getItemById(id: number): Observable<any> {
        return this.http.get(`${COURSE_URL}${id}`);
    }

    isNotEmpty(): boolean {
        return this.courses.length > 0;
    }
}
