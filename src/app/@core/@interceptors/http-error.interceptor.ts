// import {
//   HttpErrorResponse, HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
//   HttpResponse
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { throwError } from 'rxjs/internal/observable/throwError';
// import { catchError, map, timeout } from 'rxjs/operators';
// import { CustomApiService } from '../@services/api.service';
// import { CustomToastService } from '../@services/toast.service';

// @Injectable()
// export class HttpErrorInterceptor implements HttpInterceptor {
//   constructor(private apiService: CustomApiService, private toastService: CustomToastService,) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler) {
//     let authReq;

//     if (request.headers.get('skipHeader')) {
//       authReq = request.clone();
//     }
//     else {
//       authReq = request.clone({
//         headers: this.apiService.getHeader(),
//       });
//     }

//     return next.handle(authReq).pipe(
//       timeout(60000),
//       // catchError((err:HttpErrorResponse<any>) => {
//       //   return this.handleError(err);
//       // }),
//       map((res: HttpResponse<any>) => res)
//     );
//   }

//   handleError(err: HttpErrorResponse) {
//     if (err.status == 401) {
//       this.apiService.unauthorized();
//     }
//     // else if (err.status == 0 || !navigator.onLine) {
//     //   this.toastService.showError(
//     //     'Unkown Error',
//     //     'Please Check Your Internet Connection'
//     //   );
//     // }
//     else if (
//       err.status == 500 ||
//       err.status == 501 ||
//       err.status == 502 ||
//       err.status == 503 ||
//       err.status == 504 ||
//       err.status == 505
//     ) {
//       this.toastService.showError('Server Side Error', 'Something Went Wrong on Server');
//     } else if (err.status == 404) {
//       this.toastService.showError('Not Found', 'Data Missing');
//     }
//     else if (err.status == 403) {
//       this.toastService.showError('Not Allowed', 'Not Authorized to access this Page');
//     }
//     // else {
//     //   this.toastService.showError('Ooops!', err.error.error_description);
//     // }
//     return throwError(err);
//   }
// }
