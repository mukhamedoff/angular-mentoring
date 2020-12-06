import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchComponent } from '../search/search.component';
import { DurationPipe } from '../duration.pipe';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from '../order-by.pipe';
import { FilterSearchPipe } from '../filter-search.pipe';
import { CourseDeleteModalComponent } from './../modals/courses/course-removing/course-removing.component';
import { CreationdatestatusDirective } from './../creationdatestatus.directive';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    CourseDeleteModalComponent,
    SearchComponent,
    DurationPipe,
    CreationdatestatusDirective,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    OrderByPipe,
    FilterSearchPipe
  ],
  exports: [
    CoursesComponent,
    CourseItemComponent,
    CourseDeleteModalComponent,
    SearchComponent
  ]
})
export class CoursesModule { }
