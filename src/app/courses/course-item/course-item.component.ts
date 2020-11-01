import { Component, Input } from '@angular/core';
import { Course } from '../../shared/courses/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {

  @Input() course: Course;
  @Input() index: number;

}
