import { FilterSearchPipe } from './../filter-search.pipe';
import { OrderByPipe } from './../order-by.pipe';
import { CoursesService } from './../shared/courses/courses.service';
import { Course } from '../shared/courses/course.interface';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of, concat } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  removingCourse: Course;
  hasMore = false;
  showRemoveCourseModal = false;
  page = 1;
  displayLimit = 2;

  constructor(
    public coursesService: CoursesService,
    public orderByName: OrderByPipe,
    public filterSearch: FilterSearchPipe
  ) {
    var _this = this;
    this.coursesService
      .getAll()
      .pipe(
        tap((data: any) => this.coursesService.setList(data)),
        tap(data => {
          this.courses = this.coursesService.getOrdered(this.page, this.displayLimit);
        }),
        catchError(err => of(`Error is getting course fetching: ${err}`))
      )
      .subscribe(console.log);
  }

  ngOnInit(): void {
    this.hasMore = this.coursesService.isNotEmpty();
  }

  onLoadMore(): void {
    this.courses = this.coursesService.getOrdered(++this.page, this.displayLimit);
  }

  onDelete(id: number): void {
    if (this.showRemoveCourseModal) {
      const removeSubs = this.coursesService.removeCourse(this.removingCourse.id);
      const getCourseList = this.coursesService
        .getAll()
        .pipe(
          tap((data: any) => this.coursesService.setList(data)),
          tap(data => {
            this.courses = this.coursesService.getOrdered(this.page, this.displayLimit);
          }),
          catchError(err => of(`Error is getting course fetching: ${err}`))
        );
      
      concat(removeSubs, getCourseList).subscribe(console.log);
      this.showRemoveCourseModal = false;
    } else {
      this.removingCourse = this.coursesService.getItemById(id);
      this.showRemoveCourseModal = true;
    }
  }

  onCancel(): void {
    this.showRemoveCourseModal = false;
  }

  onSearchSubmit(searchedText: string): void {
    this.coursesService
    .getAll({ textFragment: searchedText })
    .pipe(
      tap((data: any) => this.coursesService.setList(data)),
      tap(data => {
        this.courses = this.coursesService.getOrdered(this.page, this.displayLimit);
      }),
      catchError(err => of(`Error is getting course fetching: ${err}`))
    )
    .subscribe(console.log);
  }

}
