import { HttpClient } from '@angular/common/http';
import { User } from '../users/user.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BrowserStorageService } from '../storage.service';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public loginStatusObs: Observable<boolean> = this.loginStatusSubject.asObservable();

  constructor(
    private storageService: BrowserStorageService,
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<object> {
    return this.http.post('http://localhost:3004/auth/login/', {login: email, password}, httpOptions);
  }

  logout(): void {
    this.storageService.remove('user');
    this.storageService.remove('token');
  }

  isAuthenticated(): boolean {
    return !!this.storageService.get('token');
  }

  getUserInfo(): User | object {
    return this.http.post('http://localhost:3004/auth/userinfo/', {token: this.storageService.get('token') || ''}, httpOptions);
  }

  saveToken(token: string): void {
    this.storageService.set('token', token);
  }

  setLoginStatus(value: boolean): void {
    this.loginStatusSubject.next(value);
  }
}
