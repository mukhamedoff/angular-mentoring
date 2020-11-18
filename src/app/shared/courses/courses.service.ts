import { OrderByPipe } from './../../order-by.pipe';
import { Injectable } from '@angular/core';
import { Course } from './course.interface';
import { mockedCourses } from './courses.mock';

@Injectable({ providedIn: 'root' })
export class CoursesService {
    courses: Course[] = mockedCourses;

    constructor(public orderByName: OrderByPipe){}

    getCourses(page: number, displayLimit: number): Course[] {
        return this.courses.slice(0, page * displayLimit);
    }

    getOrderedCourse(page: number, displayLimit: number): Course[] {
        return this.orderByName.transform(this.getCourses(page, displayLimit));
    }

    isNotEmpty(): boolean {
        return this.courses.length > 0;
    }
}
