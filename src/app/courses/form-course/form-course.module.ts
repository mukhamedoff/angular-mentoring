import { FormCourseComponent } from './form-course.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MultiInputComponent } from './multi-input/multi-input.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FormCourseComponent,
    MultiInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers: [
    DatePipe
  ],
  exports: [
    FormCourseComponent
  ]
})
export class FormCourseModule { }
