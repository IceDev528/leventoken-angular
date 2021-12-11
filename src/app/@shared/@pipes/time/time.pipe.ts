import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConvert',
})

/**
 * @purpose This pipe is used to convert string value of time in am/pm format
 * @example {{ '1:02:53' | timeConvert }} => 01:02 am
 */
export class TimePipe implements PipeTransform {
  /**
   * @param (string) time value to be transformed
   * @return (string) transformed value in am/pm format
   */
  transform(time: string): string {
    const timeArr = time.split(':');
    let hour: number | string = parseInt(timeArr[0]);
    let min: number | string = parseInt(timeArr[1]);
    const part = hour > 12 ? 'pm' : 'am';
    min = (min + '').length == 1 ? `0${min}` : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = (hour + '').length == 1 ? `0${hour}` : hour;
    return `${hour}:${min} ${part}`;
  }
}
