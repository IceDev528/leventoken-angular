import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HexToTimestampPipe } from './hex-to-timestamp.pipe';

@NgModule({
  declarations: [HexToTimestampPipe],
  imports: [CommonModule],
  exports: [HexToTimestampPipe],
})
export class HexToTimestampPipeModule { }
