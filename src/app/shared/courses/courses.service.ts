import { Injectable } from '@angular/core';
import { Course } from './course.interface';

@Injectable({ providedIn: 'root' })
export class CoursesService {
    courses: Course[] = [
        {
            id: 1,
            title: 'Course 1. This is title.',
            dateCreation: new Date(),
            duration: 88,
            description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
        },
        {
            id: 2,
            title: 'Course 2. This is title of a second course.',
            dateCreation: new Date(),
            duration: 127,
            description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
        },
        {
            id: 3,
            title: 'Course 3. The third course',
            dateCreation: new Date(),
            duration: 57,
            description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
        }
    ];

    getCourses(page: number, displayLimit: number): Course[] {
        return this.courses.splice(0, page * displayLimit);
    }

    isNotEmpty(): boolean {
        return this.courses.length > 0;
    }
}
