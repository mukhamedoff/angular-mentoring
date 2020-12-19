import { CoursesService } from './../../shared/courses/courses.service';
import { DatePipe } from '@angular/common';
import { Course } from './../../shared/courses/course.interface';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCourseComponent implements OnInit {

  @Input() course: Course;
  @Output() cancel: EventEmitter<number> = new EventEmitter<number>();
  @Output() save: EventEmitter<object> = new EventEmitter<object>();

  name: string;
  description: string;
  length: number;
  date: string;

  constructor(private datePipe: DatePipe, private courseService: CoursesService) { }

  ngOnInit(): void {
    if (this.course) {
      const { name, description, length, date } = this.course;
      this.name = name;
      this.description = description;
      this.length = length;
      this.date = this.datePipe.transform(date, 'MM/dd/yyyy');
    }
  }

  onCancel(event): void {
    this.cancel.emit(event);
  }

  onSave(event): void {
    this.save.emit({
      id: this.course?.id || (this.courseService.getCoursesLength() + 1),
      name: this.name,
      description: this.description,
      length: this.length,
      date: this.date
    });
  }

}
