import { PreloadingService } from './../shared/preloading.service';
import { UserService } from './../shared/users/user.services';
import { AuthService } from './../shared/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  isValid = true;
  email = '';
  password = '';

  constructor(
    public authService: AuthService,
    public userService: UserService,
    private router: Router,
    private preloadingService: PreloadingService
  ) { }

  async onLogin(): Promise<void> {
    if (this.email !== '' || this.password !== '') {
      const _this = this;
      this.authService.login(this.email, this.password)
        .pipe(map(data => data.token))
        .subscribe({
          next(token) {
            if (token) {
              _this.authService.saveToken(token);
              _this.router.navigateByUrl('/courses');
              _this.authService.setLoginStatus(true);
            }
          },
          error(msg) {
            console.log('Error is getting: ', msg);
          }
        })
        .add(() => { _this.preloadingService.setLoginStatus(false); });
    }
  }
}
