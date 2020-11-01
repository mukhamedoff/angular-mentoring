import { Path as MenuPath } from './../path';
import { Injectable } from '@angular/core';
import { Menu } from './menu.interface';

@Injectable({ providedIn: 'root' })
export class MenuService {
    registeredMenu: Menu[] = [{
        icon: 'person',
        title: 'User account',
        href: MenuPath.ACCOUNT
    }, {
        icon: 'login',
        title: 'Log out',
        href: MenuPath.LOGOUT
    }];
    unRegisteredMenu: Menu[] = [{
        title: 'Log in',
        href: MenuPath.LOGIN
    }, {
        title: 'Register',
        href: MenuPath.REGISTER
    }];

    getMenu(isUserLogin: boolean): Menu[] {
        return isUserLogin ? this.registeredMenu : this.unRegisteredMenu;
    }
}
