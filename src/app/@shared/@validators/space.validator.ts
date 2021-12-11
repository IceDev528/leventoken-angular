import { AbstractControl, ValidationErrors } from '@angular/forms';

export class SpaceValidators {
  static canNotContainSpace(control: AbstractControl) {
    if (control.value) {
      if (
        (control.value as string).indexOf(' ') >= 0 &&
        (control.value as string).trim().length == 0
      ) {
        return { canNotContainSpace: true };
      }
      let a:any
      return a as any;
    }
  }
}
