import { MenuState } from './../store/menu/menu.reducers';
import { Menu } from './../shared/menu/menu.interface';
import { AuthChangeLoginStatusAction } from './../store/auth/auth.actions';
import { selectIsLogin } from './../store/auth/auth.selectors';
import { AuthState } from './../store/auth/auth.reducer';
import { PreloadingService } from './../shared/preloading.service';
import { FirstLetterCasePipe } from './../first-letter-case.pipe';
import { AuthService } from '../shared/auth/auth.service';
import { MenuService } from './../shared/menu/menu.services';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectMenuList } from '../store/menu/menu.selectors';
import { ChangeMenuListAction } from '../store/menu/menu.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = [];
  isLoggedIn$: Observable<boolean> = this.authService.loginStatusObs;
  isLogin$: Observable<boolean> = this.store$.pipe(select(selectIsLogin));
  menuList$: Observable<Array<Menu>> = this.store$.pipe(select(selectMenuList));

  constructor(
    public menuService: MenuService,
    public firstLetterCasePipe: FirstLetterCasePipe,
    public authService: AuthService,
    private preloadingService: PreloadingService,
    private router: Router,
    private store$: Store<AuthState | MenuState>
  ) {}

  ngOnInit(): void {    
    if (this.authService.isAuthenticated()) {
      this.getUserInfo();
    }
  }

  onAction(event, action: string): void {
    event.preventDefault();
    if (!!action) {
      this[`on${this.firstLetterCasePipe.transform(action)}`]();
    }
  }

  getUserInfo(): void {
    var _this = this;
    this.authService.getUserInfo()
      .pipe(
        map(user => user.name)
      )
      .subscribe({
        next: name => {
          _this.store$.dispatch(new ChangeMenuListAction({
            menuList: _this.menuService.getMenu(true, `${name.first} ${name.last}`)
          }));
        },
        error: error => {
          console.log(error);
        }
      })
      .add(() => { _this.preloadingService.setLoginStatus(false); });
  }

  onLogin(): void {
    this.store$.dispatch(new AuthChangeLoginStatusAction({
      isLogin: true
    }));
  }

  onLogout(): void {
    this.authService.logout();
    this.store$.dispatch(new AuthChangeLoginStatusAction({
      isLogin: false
    }));
    this.store$.dispatch(new ChangeMenuListAction({
      menuList: this.menuService.getMenu(false)
    }));
    this.router.navigateByUrl('/');
  }

}
