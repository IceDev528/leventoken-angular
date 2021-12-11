import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OneDecimalPipe, TwoDecimalPipe } from './decimal.pipe';

@NgModule({
  declarations: [OneDecimalPipe, TwoDecimalPipe],
  imports: [CommonModule],
  exports: [OneDecimalPipe, TwoDecimalPipe],
})
export class DecimalPipeModule { }
