import { Course } from './course.interface';

export const mockedCourses: Course[] = [
    {
        id: 1,
        name: 'BCourse 1. This is title.',
        date: new Date(2020, 9, 28),
        length: 88,
        isTopRated: false,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
        id: 2,
        name: 'ACourse 2. This is title of a second course.',
        date: new Date(2020, 11, 9),
        length: 127,
        isTopRated: true,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
        id: 3,
        name: 'Course 3. The third course',
        date: new Date(),
        length: 57,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    }
];
