import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from '@shared/guards/is-authenticated.guard';
import { isUnauthenticatedGuard } from '@shared/guards/is-unauthenticated.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'core' },
    { path: 'auth', canActivate: [isUnauthenticatedGuard], loadChildren: () => import('@auth/auth.module').then(m => m.AuthModule) },
    { path: 'core', canActivate: [isAuthenticatedGuard], loadChildren: () => import('@core/core.module').then(m => m.CoreModule) }
];
