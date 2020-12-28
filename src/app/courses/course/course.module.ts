import { CourseResolver } from './../../shared/courses/courses.resolver';
import { FormCourseModule } from './../form-course/form-course.module';
import { BrowserModule } from '@angular/platform-browser';
import { CourseComponent } from './course.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormCourseModule
  ],
  providers: [
    CourseResolver
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
