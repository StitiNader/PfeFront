import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const USER_ID_KEY = 'AuthUserId';
const AUTHORITIES_KEY = 'AuthAuthorities';
const USER_KEY = 'AuthUser';
@Injectable({
  providedIn: 'root'
})
export class ManagmentTokenService {

  constructor(private route: Router) {
  }
  signOut() {
    window.localStorage.clear();
    this.route.navigate(['']);
}
public saveToken(token: string) {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.setItem(TOKEN_KEY, token);
}

public getToken(): string {
  return localStorage.getItem(TOKEN_KEY)!;
}
public isLoggedIn() {
  return !!this.getToken();
}
}
