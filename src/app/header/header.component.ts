import { PreloadingService } from './../shared/preloading.service';
import { FirstLetterCasePipe } from './../first-letter-case.pipe';
import { AuthService } from '../shared/auth/auth.service';
import { MenuService } from './../shared/menu/menu.services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  menu = [];
  isLoggedIn$: Observable<boolean> = this.authService.loginStatusObs;

  constructor(
    public menuService: MenuService,
    public firstLetterCasePipe: FirstLetterCasePipe,
    public authService: AuthService,
    private preloadingService: PreloadingService
  ) {}

  ngOnInit(): void {
    const _this = this;
    
    this.subscription = this.isLoggedIn$.subscribe(
      (isLoggedIn: boolean) => {
        if (isLoggedIn && _this.authService.isAuthenticated()) {
          _this.getUserInfo();
        } else {
          _this.menu = _this.menuService.getMenu(false);
        }
      },
      err => { console.log(err); }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
          _this.menu = _this.menuService.getMenu(true, `${name.first} ${name.last}`);
        },
        error: error => {
          console.log(error);
        }
      })
      .add(() => { _this.preloadingService.setLoginStatus(false); });
  }

  onLogin(): void {
    this.authService.setLoginStatus(false);
  }

  onLogout(): void {
    this.authService.logout();
  }

}
