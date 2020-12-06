import { User } from '../users/user.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BrowserStorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public loginStatusObs: Observable<boolean> = this.loginStatusSubject.asObservable();

  constructor(
    private storageService: BrowserStorageService,
  ) { }

  login(user: User, token: string): void {
    if (user) { this.storageService.set('user', JSON.stringify(user)); }
    if (token) { this.storageService.set('token', token); }
  }

  logout(): void {
    this.storageService.remove('user');
    this.storageService.remove('token');
  }

  isAuthenticated(): boolean {
    return !!this.storageService.get('token');
  }

  getUserInfo(): User | object {
    return JSON.parse(this.storageService.get('user'));
  }

  setLoginStatus(value: boolean): void {
    this.loginStatusSubject.next(value);
  }
}
