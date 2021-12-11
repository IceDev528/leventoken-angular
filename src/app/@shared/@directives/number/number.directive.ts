import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appNumber]',
})
export class NumberDirective {
  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    let initalValue = this._el.nativeElement.value;
    if (initalValue.trim() == '') this._el.nativeElement.value = '';
    // this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    else {
      if (parseInt(initalValue))
        this._el.nativeElement.value = parseInt(initalValue).toString();
      else this._el.nativeElement.value = '';
    }
    // if ( initalValue !== this._el.nativeElement.value) {
    //   event.stopPropagation();
    // }
  }
}
