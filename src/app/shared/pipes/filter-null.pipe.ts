import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNull',
  standalone: true
})
export class FilterNullPipe implements PipeTransform {
  transform<T>(value: T[]): T[] {
    return value.filter(Boolean);
  }

}
