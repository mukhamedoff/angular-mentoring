import { FilterSearchPipe } from './../filter-search.pipe';
import { OrderByPipe } from './../order-by.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      providers: [OrderByPipe, FilterSearchPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
