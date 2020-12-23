import { take, tap, catchError } from 'rxjs/operators';
import { CoursesService } from './../../shared/courses/courses.service';
import { Course } from './../../shared/courses/course.interface';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

  course: Course;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.coursesService.getItemById(+this.route.snapshot.paramMap.get('id'))
      .pipe(
        take(1),
        tap(course => { this.course = course; }),
        catchError(err => {
          console.log(`Error was caused getting course by id: ${err}`);
          return of([]);
        })
      )
      .subscribe();
  }

  onCancel(event): void {
    this.router.navigateByUrl('/courses');
  }

  onSave(course): void {
    this.coursesService.update(course);
    this.router.navigateByUrl('/courses');
  }
}
