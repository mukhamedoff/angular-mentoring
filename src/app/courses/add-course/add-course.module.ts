import { AddCourseComponent } from './add-course.component';
import { FormCourseModule } from './../form-course/form-course.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AddCourseComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormCourseModule
    ],
    exports: [
        AddCourseComponent
    ]
})
export class AddCourseModule { }
