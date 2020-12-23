import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(value: any[] = [], part?: string): any[] {
    return value.filter(item => item.name.toLowerCase().includes(part.toLowerCase()));
  }

}
