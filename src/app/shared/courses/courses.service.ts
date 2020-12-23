import { PreloadingService } from './../preloading.service';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderByPipe } from './../../order-by.pipe';
import { Injectable } from '@angular/core';
import { Course } from './course.interface';
import { mockedCourses } from './courses.mock';

const ROOT_URL = 'http://localhost:3004/courses/';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};
@Injectable({ providedIn: 'root' })
export class CoursesService {
    courses: Course[] = mockedCourses;

    constructor(
        public orderByName: OrderByPipe,
        private http: HttpClient,
        private preloadingService: PreloadingService
    ){}

    getList(page: number, displayLimit: number): Course[] {
        return this.courses.slice(0, page * displayLimit);
    }

    setList(courses: Course[]): void {
        this.courses = courses;
    }

    getAll(options?: object): Observable<object> {
        let url = ROOT_URL;
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
        const _this = this;
        const course = {
            id: this.getCoursesLength() + 1,
            name,
            date: new Date(),
            length,
            description,
            authors: null,
            isTopRated
        };
        this.http.post(ROOT_URL, course, httpOptions)
            .subscribe()
            .add(() => { _this.preloadingService.setLoginStatus(false); });
        return course;
    }

    update(id: number, name: string, length: number, description: string, isTopRated: boolean): void {
        const _this = this;
        this.getItemById(id)
            .subscribe(
                course => {
                    console.log(course);
                    course.name = name;
                    course.length = length;
                    course.description = description;
                    course.isTopRated = isTopRated;
                    
                    _this.http.patch(`${ROOT_URL}${id}`, course, httpOptions)
                        .subscribe()
                        .add(() => { _this.preloadingService.setLoginStatus(false); });
                },
                error => { console.log(error) }
            );
    }

    removeCourse(id: number): Observable<any> {
        return this.http.delete(`${ROOT_URL}${id}`)
    }

    getItemById(id: number): Observable<any> {
        const filtered = this.courses.filter(course => course.id === id);
        
        if (this.courses.length && filtered.length) {
            return from(filtered);
        } else {
            return this.http.get(`${ROOT_URL}${id}`);
        }
    }

    isNotEmpty(): boolean {
        return this.courses.length > 0;
    }
}
