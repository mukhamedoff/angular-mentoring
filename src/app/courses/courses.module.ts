import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchComponent } from '../search/search.component';
import { DurationPipe } from '../duration.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    SearchComponent,
    DurationPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesComponent,
    CourseItemComponent,
    SearchComponent
  ]
})
export class CoursesModule { }
