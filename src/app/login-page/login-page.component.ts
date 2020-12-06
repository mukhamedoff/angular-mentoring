import { UserService } from './../shared/users/user.services';
import { AuthService } from './../shared/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  isValid = true;
  email = '';
  password = '';

  constructor(public authService: AuthService, public userService: UserService, private router: Router) { }

  onLogin(): void {
    if (this.email !== '' || this.password !== '') {
      const user = this.userService.findUserInLogin(this.email, this.password);
      if (user) {
        this.authService.login(user, this.password);
        this.router.navigateByUrl('/courses');
        this.authService.setLoginStatus(true);
      }
    }
  }
}
