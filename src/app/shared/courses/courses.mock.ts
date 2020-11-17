import { Course } from './course.interface';

export const mockedCourses: Course[] = [
    {
        id: 1,
        title: 'BCourse 1. This is title.',
        dateCreation: new Date(2020, 9, 28),
        duration: 88,
        topRated: false,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
        id: 2,
        title: 'ACourse 2. This is title of a second course.',
        dateCreation: new Date(2020, 11, 9),
        duration: 127,
        topRated: true,
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
