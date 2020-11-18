import { CreationdatestatusDirective } from './creationdatestatus.directive';
import { DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

const freshCourseBorder = '2px solid green';
const releasedCourseBorder = '2px solid blue';
@Component({
  template: `
  <div class="course-item" appCreationdatestatus="${new Date(2020, 9, 28)}"></div>
  <div class="course-item" appCreationdatestatus="${new Date(2020, 11, 9)}"></div>
  <div class="course-item" appCreationdatestatus="${new Date()}"></div>
  <div class="course-item"></div>
  `
})
class TestComponent { }

describe('CreationdatestatusDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let courseItemDe: DebugElement[];
  let courseItemNot: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestComponent, CreationdatestatusDirective ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    courseItemDe = fixture.debugElement.queryAll(By.directive(CreationdatestatusDirective));

    // the h2 without the HighlightDirective
    courseItemNot = fixture.debugElement.queryAll(By.css('.course-item:not([appCreationdatestatus])'));
  });

  // color tests
  it('should have three highlighted elements', () => {
    expect(courseItemDe.length).toBe(3);
  });

  it(`should border 1st <div.course-item> border "${freshCourseBorder}"`, () => {
    const border = courseItemDe[0].nativeElement.style.border;
    expect(border).toBe('');
  });

  it(`should border 2nd <div.course-item> border "${releasedCourseBorder}"`, () => {
    const border = courseItemDe[1].nativeElement.style.border;
    expect(border).toBe(releasedCourseBorder);
  });

  it('1 <div.course-item> should not have a customProperty', () => {
    expect(courseItemNot[0].properties.customProperty).toBeUndefined();
  });
});
