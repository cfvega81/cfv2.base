import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from '@shared/guards/is-authenticated.guard';
import { isUnauthenticatedGuard } from '@shared/guards/is-unauthenticated.guard';
import { AuthService } from '@shared/services/auth.service';

export const routes: Routes = [
    { path: '', redirectTo: 'core', pathMatch: 'full' },
    { path: 'auth', providers: [AuthService], canActivate: [isUnauthenticatedGuard], loadChildren: () => import('@auth/auth.routes') },
    { path: 'core', providers: [AuthService], canActivate: [isAuthenticatedGuard], loadChildren: () => import('@core/core.routes') }
];
