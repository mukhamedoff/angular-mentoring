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

  constructor(public userService: UserService, public menuService: MenuService) { }

  ngOnInit(): void {
    this.menu = this.menuService.getMenu(!!this.userService.user.id);
  }

}
