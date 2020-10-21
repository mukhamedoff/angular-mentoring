import { CoursesService } from './../shared/courses/courses.service';
import { Course } from '../shared/courses/course.interface';
import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

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

  loadMore(): void {
    console.log('Load more button was clicked');
  }

  onDelete(id: number): void {
      console.log(`The course ${id} was deleted`);
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
