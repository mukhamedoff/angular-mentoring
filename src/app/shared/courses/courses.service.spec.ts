import { Course } from './course.interface';
import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import { mockedCourses } from './courses.mock';

describe('CoursesService', () => {
    let coursesService: CoursesService;
    const page = 1;
    const displayLimit = 2;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ CoursesService ]
        });
        coursesService = TestBed.inject(CoursesService);
    });

    it('#getCourses should return two first courses', () => {
        expect(coursesService.getList(page, displayLimit)).toEqual([mockedCourses[0], mockedCourses[1]]);
    });

    it('#getCourses length should to be equal display limit', () => {
        expect(coursesService.getList(page, displayLimit).length).toBe(displayLimit);
    });

    it('#isNotEmpty should return true if courses is not empty', () => {
        expect(coursesService.isNotEmpty()).toBe(true);
    });
});
