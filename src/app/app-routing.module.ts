import { AddCourseComponent } from './courses/add-course/add-course.component';
import { Path, Routes as RouterPath } from './shared/path';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '',   redirectTo: Path.COURSES, pathMatch: 'full' },
  {
    path: RouterPath.COURSES,
    data: {
      breadcrumbs: true,
      text: 'Courses'
    },
    children: [
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: 'add-course',
        component: AddCourseComponent,
        data: {
          breadcrumbs: true,
          text: 'New course'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
