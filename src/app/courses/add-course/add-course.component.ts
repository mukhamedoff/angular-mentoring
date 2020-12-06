import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  title: string;
  description: string;
  duration: string;
  date: string;

  onCancel(event): void {
    console.log('cancel');
  }

  onSave(event): void {
    console.log({
      title: this.title,
      description: this.description,
      duration: this.duration,
      date: this.date
    });
  }
}
