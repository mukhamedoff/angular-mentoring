import { Course } from './../../shared/courses/course.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coursesNode, CoursesState } from "./courses.reducers";

export const selectCoursesFeature = createFeatureSelector<CoursesState>(coursesNode);

export const selectCourseList = createSelector(
    selectCoursesFeature,
    (state: CoursesState): Array<Course> => state.courses
);