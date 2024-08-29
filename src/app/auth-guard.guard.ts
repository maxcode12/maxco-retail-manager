import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthenticationService);
  let routerService = inject(Router);
  if(!authService.isLoggedIn()) {
    routerService.navigate(['/login']);
    return false;
  }
  return true;
};
