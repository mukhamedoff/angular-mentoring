import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(value: number, args?: any): string {
        const h = Math.floor(value / 60);
        const restMin = value - h * 60;
        return value < 60 ? `${value}min` : `${h}h ${restMin}min`;
    }
}
