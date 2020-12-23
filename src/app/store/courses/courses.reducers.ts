import { createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/shared/courses/course.interface';
import { authActionsType } from '../auth/auth.actions';
import { CoursesActions, coursesActionsType } from './courses.actions';

export const coursesNode = 'courses';

export interface CoursesState {
    courses: Array<Course>
} 

export const initialState = {
    courses: []
};

export const CoursesReducer = (state = initialState, action: CoursesActions) => {
    switch(action.type) {
        case coursesActionsType.changeCourseList:
            return {
                ...state,
                courses: action.payload.courses
            }
        default:
            return state;
    }
}
