import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchComponent } from '../search/search.component';
import { DurationPipe } from '../duration.pipe';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    SearchComponent,
    DurationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent,
    CourseItemComponent,
    SearchComponent
  ]
})
export class CoursesModule { }
