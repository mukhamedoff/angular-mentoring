import { User } from '../users/user.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public loginStatusObs: Observable<boolean> = this.loginStatusSubject.asObservable();

  login(user: User, token: string): void {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserInfo(): User | object {
    return JSON.parse(localStorage.getItem('user'));
  }

  setLoginStatus(value: boolean): void {
    this.loginStatusSubject.next(value);
  }
}
