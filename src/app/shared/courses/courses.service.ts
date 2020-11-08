import { Injectable } from '@angular/core';
import { Course } from './course.interface';
import { mockedCourses } from './courses.mocked';

@Injectable({ providedIn: 'root' })
export class CoursesService {
    courses: Course[] = mockedCourses;

    getCourses(page: number, displayLimit: number): Course[] {
        return this.courses.slice(0, page * displayLimit);
    }

    isNotEmpty(): boolean {
        return this.courses.length > 0;
    }
}
