import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService  = inject(AuthService);
  const router = inject(Router);
  return authService.isAuthenticated() ? true : router.navigateByUrl('auth');
};
