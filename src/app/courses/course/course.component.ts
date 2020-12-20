import { CoursesService } from './../../shared/courses/courses.service';
import { Course } from './../../shared/courses/course.interface';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    const _this = this;
    this.coursesService.getItemById(+this.route.snapshot.paramMap.get('id'))
      .subscribe(
        course => { _this.course = course; },
        error => { console.log(error); }
      );
  }

  onCancel(event): void {
    this.router.navigateByUrl('/courses');
  }

  onSave(course): void {
    const {id, name, duration, description } = course;
    this.coursesService.update(id, name, duration, description, false);
    this.router.navigateByUrl('/courses');
  }
}
