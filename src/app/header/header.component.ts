import { FirstLetterCasePipe } from './../first-letter-case.pipe';
import { AuthService } from '../shared/auth/auth.service';
import { MenuService } from './../shared/menu/menu.services';
import { UserService } from './../shared/users/user.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = [];
  isAuth: boolean;

  constructor(
    public userService: UserService,
    public menuService: MenuService,
    public firstLetterCasePipe: FirstLetterCasePipe,
    public authService: AuthService) {
      this.authService.loginStatusObs.subscribe(isAuth => this.isAuth = isAuth);
    }

  ngOnInit(): void {
    this.menu = this.menuService.getMenu(this.authService.isAuthenticated());
  }

  onAction(event, action: string): void {
    event.preventDefault();
    if (!!action) {
      this[`on${this.firstLetterCasePipe.transform(action)}`]();
    }
  }

  onLogin(): void {
    this.authService.setLoginStatus(false);
  }

  onLogout(): void {
    this.authService.logout();
  }

}
