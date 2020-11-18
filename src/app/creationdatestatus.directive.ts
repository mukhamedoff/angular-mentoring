import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const freshCourseBorder = '2px solid green';
const releasedCourseBorder = '2px solid blue';

@Directive({
  selector: '[appCreationdatestatus]'
})
export class CreationdatestatusDirective implements OnInit{
  @Input('appCreationdatestatus') creationDateIn: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setElement();
  }

  setElement(): void {
    const currentDate: Date = new Date();
    const creationDate: Date = new Date(this.creationDateIn);

    this.el.nativeElement.style.border = getBorderStyle(currentDate, creationDate);

    function getBorderStyle(current: Date, creation: Date): string {
      const date14days = new Date(currentDate.getTime());
      date14days.setDate(date14days.getDate() - 14);

      if (creation < current && creation >= date14days) {
        return freshCourseBorder;
      } else if (creation > current) {
        return releasedCourseBorder;
      }
      return '';
    }
  }
}
