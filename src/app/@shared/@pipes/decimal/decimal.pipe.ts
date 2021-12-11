import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDecimal',
})

/**
 * @purpose This pipe is used to transform any floating number to two decimal places
 */
export class TwoDecimalPipe implements PipeTransform {
  /**
   * @param number value to be transformed
   * @return transformed value upto two decimal places
   */
  transform(value: any): any {
    if (value === null || value < 0) return;
    else return parseFloat(value).toFixed(2);
  }
}

@Pipe({
  name: 'oneDecimal',
})

/**
 * @purpose This pipe is used to transform any floating number to one decimal places
 */
export class OneDecimalPipe implements PipeTransform {
  /**
   * @param number value to be transformed
   * @return transformed value upto one decimal places
   */
  transform(value: string): string {
    if (value === null || parseInt(value) < 0) return '';
    else return parseFloat(value).toFixed(1);
  }
}
