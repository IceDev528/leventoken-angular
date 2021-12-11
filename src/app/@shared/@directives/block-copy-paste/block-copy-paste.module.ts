import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockCopyPasteDirective } from './block-copy-paste.directive';

@NgModule({
  declarations: [BlockCopyPasteDirective],
  imports: [CommonModule],
  exports: [BlockCopyPasteDirective],
})
export class BlockCopyPasteModule { }
