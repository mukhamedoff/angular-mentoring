import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../shared/courses/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {

  @Input() course: Course;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  onDeleteItem(): void {
    this.deleteCourse.emit(this.course.id);
  }

}
