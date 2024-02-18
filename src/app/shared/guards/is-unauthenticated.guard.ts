import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

export const isUnauthenticatedGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService);
  console.log('guard:isUnauthenticated');
  return !authService.isAuthenticated();
};
