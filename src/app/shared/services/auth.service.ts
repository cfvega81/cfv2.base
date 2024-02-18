import { Injectable } from '@angular/core';
import { AuthenticationRequest, AuthenticationResponse } from '@shared/interfaces/auth';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { SS_TOKEN } from '@data/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationChanged: BehaviorSubject<boolean> = new BehaviorSubject(false);

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem(SS_TOKEN);
  }

  constructor() { }

  login(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    sessionStorage.clear();
    let token: string = request.username && request.password ? Math.random().toString() : '';
    return of(token).pipe(
      map((token: string) => {
        return { token };
      }),
      tap(_ => {
        if (token) {
          sessionStorage.setItem(SS_TOKEN, token);
        }
        this.authenticationChanged.next(token.length > 0);
      })
    );
  }

  logout(): void {
    sessionStorage.clear();
    this.authenticationChanged.next(false);
  }
}
