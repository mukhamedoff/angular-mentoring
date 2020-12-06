import { FirstLetterCasePipe } from './../first-letter-case.pipe';
import { AuthService } from '../shared/auth/auth.service';
import { MenuService } from './../shared/menu/menu.services';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = [];
  isLoggedIn$: Observable<boolean> = this.authService.loginStatusObs;

  constructor(
    public menuService: MenuService,
    public firstLetterCasePipe: FirstLetterCasePipe,
    public authService: AuthService) {}

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
