import { CoursesService } from './../../shared/courses/courses.service';
import { Course } from './../../shared/courses/course.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course: Course;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.course = this.coursesService.getItemById(+this.route.snapshot.paramMap.get('id'));
  }

  onCancel(event): void {
    this.router.navigateByUrl('/courses');
  }

  onSave(course): void {
    const {id, title, duration, description } = course;
    this.coursesService.update(id, title, duration, description, false);
    this.router.navigateByUrl('/courses');
  }
}
