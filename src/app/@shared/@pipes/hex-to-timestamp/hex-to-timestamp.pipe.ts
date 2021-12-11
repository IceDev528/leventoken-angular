import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hextotimestamp',
})

/**
 * @purpose This pipe is used to convert hex value of time in timestamp format
 * @example { '5f0bf4e0'| hextotimestamp }  =>
 */
export class HexToTimestampPipe implements PipeTransform {
  /**
   * @param (string) hex value to be transformed
   * @return (Date) transformed Date value
   */
  transform(hex: string): any {
    let decimal_value = this.hexToDec(hex);
    /** Need convertion in milis to create date  object */
    decimal_value = decimal_value * 1000;
    return new Date(decimal_value);
  }

  /**
   * @purpose get decimal value of hex
   * @param (string) hex value to be transformed
   * @return (number) decimal value
   */
  hexToDec(hex:any) {
    return hex
      .toLowerCase()
      .split('')
      .reduce((result:any, ch:any) => result * 16 + '0123456789abcdef'.indexOf(ch), 0);
  }
}
