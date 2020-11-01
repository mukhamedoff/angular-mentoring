import { Path, Routes as RouterPath } from './shared/path';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '',   redirectTo: Path.COURSES, pathMatch: 'full' },
  {
    path: RouterPath.COURSES,
    component: CoursesComponent,
    data: {
      breadcrumbs: true,
      text: 'Courses'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
