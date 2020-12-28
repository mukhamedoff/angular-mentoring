import { CoursesService } from './../../shared/courses/courses.service';
import { DatePipe } from '@angular/common';
import { Course } from './../../shared/courses/course.interface';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCourseComponent implements OnInit {

  @Input() course: Course;
  @Output() cancel: EventEmitter<number> = new EventEmitter<number>();
  @Output() save: EventEmitter<object> = new EventEmitter<object>();

  maxLengthName = 5;
  maxLengthDescription = 5;

  courseForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(this.maxLengthName)]],
    description: ['', [Validators.required, Validators.maxLength(this.maxLengthDescription)]],
    length: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    date: ['', Validators.required],
    authors: [[]],
  });

  constructor(private datePipe: DatePipe, private courseService: CoursesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.course) {
      const { name, description, length, date, authors } = this.course;
      this.courseForm.patchValue({
        name,
        description,
        length,
        date,
        authors
      });
    }
  }

  get name() { return this.courseForm.get('name'); }
  get description() { return this.courseForm.get('description'); }
  get length() { return this.courseForm.get('length'); }
  get date() { return this.courseForm.get('date'); }
  get authors() { return this.courseForm.get('authors'); }

  onCancel(event): void {
    this.cancel.emit(event);
  }

  onSave(event): void {
    if (!this.courseForm.invalid) {
      this.save.emit({
        name: this.name,
        description: this.description,
        length: this.length,
        date: this.date,
        authors: this.authors
      });
    }
  }

}
