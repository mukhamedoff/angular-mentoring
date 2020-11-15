import { FilterSearchPipe } from './../filter-search.pipe';
import { OrderByPipe } from './../order-by.pipe';
import { CoursesService } from './../shared/courses/courses.service';
import { Course } from '../shared/courses/course.interface';
import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  courses: Course[];
  hasMore = false;
  page = 1;
  displayLimit = 2;

  constructor(
    public coursesService: CoursesService,
    public orderByName: OrderByPipe,
    public filterSearch: FilterSearchPipe
  ) {
    this.courses = this.orderByName.transform(this.coursesService.getCourses(this.page, this.displayLimit));
  }

  ngOnInit(): void {
    this.hasMore = this.coursesService.isNotEmpty();
  }

  onLoadMore(): void {
    console.log('Load more button was clicked');
  }

  onDelete(id: number): void {
      console.log(`The course ${id} was deleted`);
  }

  onFilter(searchedText: string): void {
    const filteredCourses = this.filterSearch.transform(this.coursesService.getCourses(this.page, this.displayLimit), searchedText);
    this.courses = this.orderByName.transform(filteredCourses);
  }

  ngOnChanges(): void {
    // console.log('ngOnChanges');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
  }

}
