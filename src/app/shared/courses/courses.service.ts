import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderByPipe } from './../../order-by.pipe';
import { Injectable } from '@angular/core';
import { Course } from './course.interface';
import { mockedCourses } from './courses.mock';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};
@Injectable({ providedIn: 'root' })
export class CoursesService {
    courses: Course[] = mockedCourses;

    constructor(public orderByName: OrderByPipe, private http: HttpClient){}

    getList(page: number, displayLimit: number): Course[] {
        return this.courses.slice(0, page * displayLimit);
    }

    setList(courses: Course[]): void {
        this.courses = courses;
    }

    getCoursesFromServer(options?: object): Observable<object> {
        let url = 'http://localhost:3004/courses/';
        if(options && Object.entries(options).length > 0) {
            url += `?${Object.entries(options).map(item => item.join('=')).join('&')}`;
        }

        return this.http.get(url);
    }
    
    private getCoursesLength(): number {
        return this.courses.length;
    }

    getAll(page: number, displayLimit: number): Course[] {
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
        this.http.post('http://localhost:3004/courses/', course, httpOptions);
        return course;
    }

    update(id: number, name: string, length: number, description: string, isTopRated: boolean): Course {
        const course: Course = this.getItemById(id);
        course.name = name;
        course.length = length;
        course.description = description;
        course.isTopRated = isTopRated;
        return course;
    }

    removeCourse(id: number): Course[] {
        return this.courses = this.courses.filter(course => course.id !== id);
    }

    removeServerCourse(id: number): void {
        this.http.delete(`http://localhost:3004/courses/${id}`);
    }

    getItemById(id: number): Course {
        const filtered = this.courses.filter(course => course.id === id);
        return filtered.length && filtered[0];
    }

    isNotEmpty(): boolean {
        return this.courses.length > 0;
    }
}
