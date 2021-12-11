import { FormGroup, ValidatorFn } from '@angular/forms';

export function atLeastOneCheckboxCheckedValidator(
  minRequired = 1
): ValidatorFn {
  return function validate(formGroup: FormGroup) {
    let checked = 0;

    for (const key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        const element = formGroup.controls[key];
        if (element.value == true) checked++;
      }
    }

    if (checked < minRequired) {
      return {
        requireOneCheckboxToBeChecked: true,
      };
    }

    return null;
  };
}
