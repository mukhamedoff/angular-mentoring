import { FormCourseComponent } from './form-course.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    FormCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    DatePipe
  ],
  exports: [
    FormCourseComponent
  ]
})
export class FormCourseModule { }
