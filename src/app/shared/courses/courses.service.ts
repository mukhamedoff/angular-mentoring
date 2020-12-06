import { OrderByPipe } from './../../order-by.pipe';
import { Injectable } from '@angular/core';
import { Course } from './course.interface';
import { mockedCourses } from './courses.mock';

@Injectable({ providedIn: 'root' })
export class CoursesService {
    courses: Course[] = mockedCourses;

    constructor(public orderByName: OrderByPipe){}

    getList(page: number, displayLimit: number): Course[] {
        return this.courses.slice(0, page * displayLimit);
    }

    getCoursesLength(): number {
        return this.courses.length;
    }

    getOrderedCourse(page: number, displayLimit: number): Course[] {
        return this.orderByName.transform(this.getList(page, displayLimit));
    }

    createCourse(title: string, duration: number, description: string, topRated: boolean): Course {
        const course = {
            id: this.getCoursesLength() + 1,
            title,
            dateCreation: new Date(),
            duration,
            description,
            topRated
        };
        this.courses.push(course);
        return course;
    }

    updateCourse(id: number, title: string, duration: number, description: string, topRated: boolean): Course {
        const course: Course = this.getItemById(id);
        course.title = title;
        course.duration = duration;
        course.description = description;
        course.topRated = topRated;
        return course;
    }

    removeCourse(id: number): Course[] {
        return this.courses = this.courses.filter(course => course.id !== id);
    }

    getItemById(id: number): Course {
        const filtered = this.courses.filter(course => course.id === id);
        return filtered.length && filtered[0];
    }

    isNotEmpty(): boolean {
        return this.courses.length > 0;
    }
}
