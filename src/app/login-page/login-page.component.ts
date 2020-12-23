import { PreloadingService } from './../shared/preloading.service';
import { UserService } from './../shared/users/user.services';
import { AuthService } from './../shared/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth/auth.reducer';
import { AuthChangeLoginStatusAction } from '../store/auth/auth.actions';
import { ChangeMenuListAction } from '../store/menu/menu.actions';
import { MenuService } from '../shared/menu/menu.services';

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
    public menuService: MenuService,
    private router: Router,
    private preloadingService: PreloadingService,
    private store$: Store<AuthState>
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

              _this.authService.getUserInfo()
                .pipe(map(user => user.name))
                .subscribe(
                  name => {
                    _this.store$.dispatch(new ChangeMenuListAction({
                      menuList: _this.menuService.getMenu(true, `${name.first} ${name.last}`)
                    }));
                    _this.store$.dispatch(new AuthChangeLoginStatusAction({
                      isLogin: false
                    }));
                    _this.router.navigateByUrl('/courses');
                  }
                )
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
