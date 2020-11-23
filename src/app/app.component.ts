import { AuthService } from './shared/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  isAuth: boolean;

  constructor(public authService: AuthService){
    this.authService.loginStatusObs.subscribe(isAuth => this.isAuth = isAuth);
  }
}
