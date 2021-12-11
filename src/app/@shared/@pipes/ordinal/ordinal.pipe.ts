import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})

/**
 * @purpose This pipe is used to get number ordinal
 * @example
 */
export class OrdinalPipe implements PipeTransform {
  /**
   * @param (number) number to be transformed
   * @return (string) ordinal string
   */
  transform(value: number): string {
    if (!value) {
      return '';
    } else {
      if (value > 3 && value < 21) return 'th';
      switch (value % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }
  }
}
