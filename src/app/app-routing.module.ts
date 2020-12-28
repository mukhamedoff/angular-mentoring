import { MainComponent } from './main/main.component';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseComponent } from './courses/course/course.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { Path, Routes as RouterPath } from './shared/path';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseResolver } from './shared/courses/courses.resolver';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
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
        path: 'new',
        component: AddCourseComponent,
        data: {
          breadcrumbs: true,
          text: 'New course'
        }
      },
      {
        path: ':id',
        component: CourseComponent,
        data: {
          breadcrumbs: true,
          text: 'Video Course {{ course.id }}'
        },
        resolve: {
          course: CourseResolver
        }
      }
    ],
    canActivate: [AuthGuardService]
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: {
      breadcrumbs: true,
      text: '404 page'
    }
  },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
