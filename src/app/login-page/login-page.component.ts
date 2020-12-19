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

  async onLogin(): Promise<void> {
    if (this.email !== '' || this.password !== '') {
      const _this = this;
      this.authService.login(this.email, this.password)
        .subscribe({
          next(data: any) {
            if (data?.token) {
              _this.authService.saveToken(data.token);
              _this.authService.setLoginStatus(true);
              _this.router.navigateByUrl('/courses');
              _this.authService.setLoginStatus(true);
            }
          },
          error(msg) {
            console.log('Error is getting: ', msg);
          }
        });
    }
  }
}
