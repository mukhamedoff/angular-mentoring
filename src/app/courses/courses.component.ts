import { CoursesService } from './../shared/courses/courses.service';
import { Course } from '../shared/courses/course.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  hasMore = false;
  page = 1;
  displayLimit = 2;

  constructor(public coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses(this.page, this.displayLimit);
  }

  ngOnInit(): void {
    this.hasMore = this.coursesService.isNotEmpty();
  }

}
