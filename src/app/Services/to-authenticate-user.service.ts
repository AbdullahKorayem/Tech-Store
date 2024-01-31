import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToAuthenticateUserService {
  isHeLoggedStatus!: BehaviorSubject<boolean>;
  constructor() {
    this.isHeLoggedStatus = new BehaviorSubject<boolean>(this.IsLoggedIn());
  }

  logIn(email: string, password: string) {
    let toKen = 'sdafs6465s4f6ssdf65s4f';
    localStorage.setItem('email', email);
    localStorage.setItem('toKen', toKen);
    this.isHeLoggedStatus.next(true)
  }

  logOut() {
    localStorage.removeItem('toKen');
    this.isHeLoggedStatus.next(false)
  }

  IsLoggedIn() {
    return localStorage.getItem('toKen') ? true : false;
  }

  toGetStatus():BehaviorSubject<boolean>{
    return this.isHeLoggedStatus
  }


}
