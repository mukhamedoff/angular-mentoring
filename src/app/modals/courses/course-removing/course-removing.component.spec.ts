import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRemovingComponent } from './course-removing.component';

describe('CourseRemovingComponent', () => {
  let component: CourseRemovingComponent;
  let fixture: ComponentFixture<CourseRemovingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRemovingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRemovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
