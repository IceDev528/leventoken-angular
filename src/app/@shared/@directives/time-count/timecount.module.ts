import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerDirective } from './timecount.directive';



@NgModule({
  declarations: [
    CountdownTimerDirective
  ],
  imports: [
    CommonModule,

  ],
  exports: [CountdownTimerDirective]
})
export class TimecountModule { }
