import { Course } from './../../shared/courses/course.interface';
import { Action } from '@ngrx/store';

export enum coursesActionsType {
    changeCourseList = '[COURSES] change course list'
}

export class ChangeCourseListAction implements Action {
    readonly type = coursesActionsType.changeCourseList;
    constructor(public payload: {
        courses: Array<Course>
    }) {}
}

export type CoursesActions = ChangeCourseListAction;