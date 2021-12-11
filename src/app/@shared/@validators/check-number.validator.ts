// import { AbstractControl, ValidationErrors } from '@angular/forms';

// export class CheckNumberValidators {
//   static checkPositiveNumber(control: AbstractControl): ValidationErrors {
//     if (control.value) {
//       console.log(control.value);
//       console.log((control.value as number) <= 0);

//       if ((control.value as number) <= 0) {
//         return { checkPositiveNumber: true };
//       }
//       return ;
//     } else if (control.value == 0) {
//       console.log(control.value);

//       return { checkPositiveNumber: true };
//     }
//   }
//   static checkPositiveNumberWithZero(
//     control: AbstractControl
//   ): ValidationErrors {
//     if (control.value) {
//       console.log(control.value);
//       console.log((control.value as number) < 0);

//       if ((control.value as number) < 0) {
//         return { checkPositiveNumberWithZero: true };
//       }
//       return null;
//     }
//   }
// }
