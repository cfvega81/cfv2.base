import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

export const isUnauthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return !authService.isAuthenticated();
};
