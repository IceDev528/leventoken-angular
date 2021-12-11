import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../@services/common.service';
import { CustomToastService } from '../@services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private cs: CommonService,
    private router: Router,
    private toastService: CustomToastService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuth();
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkAuth();
  }

  checkAuth(): boolean {
    if (this.cs.isAutherize()) {
      return true;
    }

    this.router.navigate(['/login']);
    this.toastService.showError('','Please log in first')
    return false;
  }
}
