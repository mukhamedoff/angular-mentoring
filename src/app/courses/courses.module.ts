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
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    CourseDeleteModalComponent,
    SearchComponent,
    DurationPipe,
    CreationdatestatusDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule
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
