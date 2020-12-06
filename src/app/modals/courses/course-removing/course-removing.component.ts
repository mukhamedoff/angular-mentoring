import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/shared/courses/course.interface';

@Component({
  selector: 'app-course-removing',
  templateUrl: './course-removing.component.html',
  styleUrls: ['./course-removing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDeleteModalComponent {

  @Input() removingCourse: Course;
  @Output() confirmDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() cancelDelete: EventEmitter<number> = new EventEmitter<number>();

  onConfirmDelete(): void {
    this.confirmDelete.emit();
  }

  onCancel(): void {
    this.cancelDelete.emit();
  }
}
