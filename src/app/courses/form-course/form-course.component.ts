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

  title: string;
  description: string;
  duration: number;
  dateCreation: string;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    if (this.course) {
      const { title, description, duration, dateCreation } = this.course;
      this.title = title;
      this.description = description;
      this.duration = duration;
      this.dateCreation = this.datePipe.transform(dateCreation, 'MM/dd/yyyy');
    }
  }

  onCancel(event): void {
    this.cancel.emit(event);
  }

  onSave(event): void {
    this.save.emit({
      id: this.course.id,
      title: this.title,
      description: this.description,
      duration: this.duration,
      dateCreation: this.dateCreation
    });
  }

}
