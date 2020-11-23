import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/shared/courses/course.interface';

@Component({
  selector: 'app-course-removing',
  templateUrl: './course-removing.component.html',
  styleUrls: ['./course-removing.component.scss']
})
export class CourseRemovingComponent {

  @Input() removingCourse: Course;
  @Output() confirmDeleteCourse: EventEmitter<number> = new EventEmitter<number>();
  @Output() cancelDeleteCourse: EventEmitter<number> = new EventEmitter<number>();

  onConfirmDeleteCourse(): void {
    this.confirmDeleteCourse.emit(this.removingCourse.id);
  }

  onCancel(): void {
    this.cancelDeleteCourse.emit();
  }
}
