import { CoursesService } from './../../shared/courses/courses.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  constructor(private router: Router, private courseService: CoursesService) {}

  onCancel(): void {
    this.router.navigateByUrl('/courses');
  }

  onSave(data): void {
    if (data) {
      this.courseService.createCourse(data.name, data.length, data.description, false);
      this.router.navigateByUrl('/courses');
    } else {
      console.log('enter required fields', data);
    }
  }
}
