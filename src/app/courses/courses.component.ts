import { CoursesState } from './../store/courses/courses.reducers';
import { PreloadingService } from './../shared/preloading.service';
import { FilterSearchPipe } from './../filter-search.pipe';
import { OrderByPipe } from './../order-by.pipe';
import { CoursesService } from './../shared/courses/courses.service';
import { Course } from '../shared/courses/course.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, Store } from '@ngrx/store';
import { selectMenuList } from '../store/menu/menu.selectors';
import { selectCourseList } from '../store/courses/courses.selectors';
import { ChangeCourseListAction } from '../store/courses/courses.actions';
import { catchError, take, tap } from 'rxjs/operators';
import { concat, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  courses$: Observable<Array<Course>> = this.store$.pipe(select(selectCourseList));
  removingCourse: Course;
  hasMore = false;
  showRemoveCourseModal = false;
  page = 1;
  displayLimit = 2;

  constructor(
    public coursesService: CoursesService,
    public orderByName: OrderByPipe,
    public filterSearch: FilterSearchPipe,
    private preloadingService: PreloadingService,
    private store$: Store<CoursesState>
  ) {
    this.coursesService
      .getAll()
      .pipe(
        tap((data: any) => this.coursesService.setList(data)),
        tap(data => {
          this.store$.dispatch(new ChangeCourseListAction({
            courses: this.coursesService.getOrdered(this.page, this.displayLimit)
          }));
        }),
        catchError(err => {
          console.log(`Error is getting course fetching: ${err}`);
          return of([]);
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.hasMore = this.coursesService.isNotEmpty();
  }

  onLoadMore(): void {
    this.courses = this.coursesService.getOrdered(++this.page, this.displayLimit);
  }

  onDelete(id: number): void {
    const _this = this;
    if (this.showRemoveCourseModal) {
      const removeSubs = this.coursesService.removeCourse(this.removingCourse.id);
      const getCourseList = this.coursesService
        .getAll()
        .pipe(
          tap((data: any) => this.coursesService.setList(data)),
          tap(data => {
            this.store$.dispatch(new ChangeCourseListAction({
              courses: this.coursesService.getOrdered(this.page, this.displayLimit)
            }));
          }),
          catchError(err => {
            console.log(`Error was caused on deleting: ${err}`);
            return of([]);
          })
        );
      
      concat(removeSubs, getCourseList)
        .subscribe();
      this.showRemoveCourseModal = false;
    } else {
      this.coursesService.getItemById(id)
        .pipe(
          take(1),
          tap(course => {
            this.removingCourse = course;
            this.showRemoveCourseModal = true;
          }),
          catchError(err => {
            console.log(`Error was caused getting course by id: ${err}`);
            return of([]);
          })
        )
        .subscribe();
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
        this.store$.dispatch(new ChangeCourseListAction({
          courses: this.coursesService.getOrdered(this.page, this.displayLimit)
        }));
      }),
      catchError(err => {
        console.log(`Error was caused on searching: ${err}`);
        return of([]);
      })
    )
    .subscribe()
  }

}
