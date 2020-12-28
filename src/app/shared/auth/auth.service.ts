import { AuthState } from './../../store/auth/auth.reducer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BrowserStorageService } from '../storage.service';
import { HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AuthChangeLoginStatusAction } from 'src/app/store/auth/auth.actions';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
const ROOT_URL = 'http://localhost:3004/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public loginStatusObs: Observable<boolean> = this.loginStatusSubject.asObservable();

  constructor(
    private storageService: BrowserStorageService,
    private http: HttpClient,
    private store$: Store<AuthState>
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${ROOT_URL}login/`, {login: email, password}, httpOptions);
  }

  logout(): void {
    this.storageService.remove('user');
    this.storageService.remove('token');
    // this.setLoginStatus(false);
  }

  isAuthenticated(): boolean {
    return !!this.storageService.get('token');
  }

  getUserInfo(): Observable<any> {
    return this.http.post(`${ROOT_URL}userinfo/`, {token: this.storageService.get('token') || ''}, httpOptions);
  }

  saveToken(token: string): void {
    this.storageService.set('token', token);
  }

  setLoginStatus(value: boolean): void {
    this.loginStatusSubject.next(value);
  }
}
