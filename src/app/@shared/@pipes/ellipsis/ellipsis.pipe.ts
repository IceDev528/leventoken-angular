import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
/**
 * @purpose This pipe is used to trancate text and show ellipsis
 * @example { 'Hello world'| ellipsis:5 }
 */
export class EllipsisPipe implements PipeTransform {
  /**
   * @param (string) text value to be transformed
   * @param (number) args such as length of char to show before ellipsis
   * @return (number) transformed value upto one decimal places
   */
  transform(value: string, args: number): any {
    if (args === null) return value;

    if (value !== null) {
      if (value.length > args) return value.substring(0, args) + '...';
      else return value;
    } else return value;
  }
}
