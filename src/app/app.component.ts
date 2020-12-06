import { Observable } from 'rxjs';
import { AuthService } from './shared/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  isLoggedIn$: Observable<boolean> = this.authService.loginStatusObs;

  constructor(public authService: AuthService){}
}
