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

  courses: Course[];
  hasMore = false;
  page = 1;
  displayLimit = 2;

  constructor(
    public coursesService: CoursesService,
    public orderByName: OrderByPipe,
    public filterSearch: FilterSearchPipe
  ) {
    this.courses = this.coursesService.getOrderedCourse(this.page, this.displayLimit);
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

  onSearchSubmit(searchedText: string): void {
    const filteredCourses = this.filterSearch.transform(this.coursesService.getCourses(this.page, this.displayLimit), searchedText);
    this.courses = this.orderByName.transform(filteredCourses);
  }

}
