import { OrderByPipe } from './../../order-by.pipe';
import { Course } from './../../shared/courses/course.interface';
import { DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { DurationPipe } from '../../duration.pipe';
import { DatePipe } from '@angular/common';

import { triggerClickEvent } from './../../shared/helpers/spec/clickEvent';
import { getDebugElement } from './../../shared/helpers/spec/debugElement';

// mock the course supplied by the parent component
const expectedCourse: Course = {
  id: 1,
  title: 'Course 1. This is title.',
  dateCreation: new Date(),
  duration: 88,
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
};
@Component({
  template: `
    <app-course-item
      (deleteCourse)="onDeleteCourse($event)"
      [course]="course"></app-course-item>`
})
class TestHostComponent {
  course: Course = expectedCourse;
  onDeleteCourse(id: number): void {}
}

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let courseDe: DebugElement;
  let courseEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, DurationPipe, OrderByPipe ]
    });
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    // find the course's DebugElement and element
    courseDe = getDebugElement(fixture, '.course-item');
    courseEl = courseDe.nativeElement;

    // simulate the parent setting the input property with that course
    component.course = expectedCourse;

    // trigger initial data binding
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display course title', () => {
    const expectedCourseTitle = expectedCourse.title.toUpperCase();
    const courseTitle = getDebugElement(fixture, '.course-item__title');
    expect(courseTitle.nativeElement.textContent).toContain(expectedCourseTitle);
  });

  it('should display course description', () => {
    const expectedCourseDescription = expectedCourse.description;
    const courseDescription = getDebugElement(fixture, '.course-item__description');
    expect(courseDescription.nativeElement.textContent).toContain(expectedCourseDescription);
  });

  it('should display course date in format "MM/dd/yyyy"', () => {
    const expectedCourseDateCreation = expectedCourse.dateCreation;
    const stubIconText = 'calendar_today';
    const courseDateCreation = getDebugElement(fixture, '.course-item__creation');
    const pipeDate = new DatePipe('en');

    fixture.detectChanges();
    expect(courseDateCreation.nativeElement.textContent).toContain(stubIconText + ' ' + pipeDate.transform(expectedCourseDateCreation, 'MM/dd/yyyy'));
  });

  it('should delete on click', () => {
    const spyDelete = spyOn(component, 'onDeleteItem');
    component.onDeleteItem();
    expect(spyDelete).toHaveBeenCalled();
  });

  it('should emit on click', () => {
    const emitter = spyOn(component.deleteCourse, 'emit');
    const courseDeleteButton = getDebugElement(fixture, '.course-item__actions--delete');
    triggerClickEvent(courseDeleteButton);
    expect(emitter).toHaveBeenCalled();
    expect(emitter).toHaveBeenCalledWith(expectedCourse.id);
  });
});

describe('TestHostComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;
  let courseEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [CourseItemComponent, TestHostComponent, DurationPipe, OrderByPipe]});
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    courseEl = fixture.nativeElement.querySelector('.course-item__actions--delete');
    fixture.detectChanges();
  }));

  it('should delete on click', () => {
    const spyDelete = spyOn(testHost, 'onDeleteCourse');
    triggerClickEvent(courseEl);
    expect(spyDelete).toHaveBeenCalled();
    expect(spyDelete).toHaveBeenCalledWith(expectedCourse.id);
  });
});
