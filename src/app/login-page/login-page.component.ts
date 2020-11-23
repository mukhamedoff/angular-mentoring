import { UserService } from './../shared/users/user.services';
import { AuthService } from './../shared/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  isValid = true;

  constructor(public authService: AuthService, public userService: UserService) { }

  onLogin(event): void {
    event.preventDefault();
    this.authService.login(this.userService.getUser(), 'qwe123asd234');
    console.log(localStorage)
  }
}
