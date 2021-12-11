import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  declarations: [EllipsisPipe],
  imports: [CommonModule],
  exports: [EllipsisPipe],
})
export class EllipsisPipeModule { }
