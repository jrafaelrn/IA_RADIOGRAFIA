import { Injectable } from '@angular/core';

import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public login?: Login;

  public clear(): void {
    this.login = undefined;
  }

  public isAuthenticated(): boolean {
    return Boolean(this.login);
  }

}
