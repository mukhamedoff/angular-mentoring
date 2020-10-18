import { CoursesService } from './../shared/courses/courses.service';
import { Course } from '../shared/courses/course.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: Course[];
  public hasMore = false;
  public page = 1;
  public perPage = 2;

  constructor(public coursesService: CoursesService) {
    this.courses = coursesService.courses.splice(0, this.page * this.perPage);
  }

  ngOnInit(): void {
    this.hasMore = this.coursesService.courses.length > 0;
  }

}
