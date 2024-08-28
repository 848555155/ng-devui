import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dSafeNullPipe',
  pure: true,
  standalone: true
})
export class SafeNullPipe implements PipeTransform {
  transform(value: unknown, replace = '--'): unknown {
    if (typeof value === 'undefined' || value === null || value === '') {
      return replace;
    }
    return value;
  }
}
