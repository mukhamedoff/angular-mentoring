import { PreloadingService } from './../shared/preloading.service';
import { FilterSearchPipe } from './../filter-search.pipe';
import { OrderByPipe } from './../order-by.pipe';
import { CoursesService } from './../shared/courses/courses.service';
import { Course } from '../shared/courses/course.interface';
import { Component, OnInit } from '@angular/core';

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
    public filterSearch: FilterSearchPipe,
    private preloadingService: PreloadingService
  ) {
    var _this = this;
    this.coursesService.getCoursesFromServer()
      .subscribe({
        next(data: any) {
          if (data) {
            _this.coursesService.setList(data);
            _this.courses = _this.coursesService.getAll(_this.page, _this.displayLimit);
          }
        },
        error(msg) {
          console.log('Error is getting course fetching: ', msg);
        }
      })
      .add(() => { _this.preloadingService.setLoginStatus(false); });
  }

  ngOnInit(): void {
    this.hasMore = this.coursesService.isNotEmpty();
  }

  onLoadMore(): void {
    this.courses = this.coursesService.getAll(++this.page, this.displayLimit);
  }

  onDelete(id: number): void {
    const _this = this;
    if (this.showRemoveCourseModal) {
      this.coursesService.removeServerCourse(this.removingCourse.id);
      this.coursesService.getCoursesFromServer()
        .subscribe({
          next(data: any) {
            if (data) {
              _this.coursesService.setList(data);
              _this.courses = _this.coursesService.getAll(_this.page, _this.displayLimit);
            }
          },
          error(msg) {
            console.log('Error is getting course fetching: ', msg);
          }
        })
        .add(() => { _this.preloadingService.setLoginStatus(false); });;
      this.showRemoveCourseModal = false;
    } else {
      this.coursesService.getItemById(id)
        .subscribe(
          course => {
            _this.removingCourse = course;
            _this.showRemoveCourseModal = true;
          },
          error => { console.log(error); }
        );
      
    }
  }

  onCancel(): void {
    this.showRemoveCourseModal = false;
  }

  onSearchSubmit(searchedText: string): void {
    const filteredCourses = this.filterSearch.transform(this.coursesService.getList(this.page, this.displayLimit), searchedText);
    this.courses = this.orderByName.transform(filteredCourses);
  }

  onServerSearchSubmit(searchedText: string): void {
    var _this = this;
    this.coursesService.getCoursesFromServer({ textFragment: searchedText })
      .subscribe({
        next(data: any) {
          if (data) {
            _this.coursesService.setList(data);
            _this.courses = _this.coursesService.getAll(_this.page, _this.displayLimit);
          }
        },
        error(msg) {
          console.log('Error is getting course fetching: ', msg);
        }
      })
      .add(() => { _this.preloadingService.setLoginStatus(false); });
  }

}
