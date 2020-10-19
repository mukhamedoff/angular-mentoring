import { UserService } from './../shared/users/user.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    if (this.userService.user.id) {
      this.menu = [{
        icon: 'person',
        title: 'User account',
        href: '/account'
      }, {
        icon: 'login',
        title: 'Log out',
        href: '/logout'
      }];
    } else {
      this.menu = [{
        title: 'Log in',
        href: '/login'
      }, {
        title: 'Register',
        href: '/register'
      }];
    }
  }

}
