import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
    return value.sort((a, b) => {
      return ('' + a.title).localeCompare(b.title);
    });
  }

}
