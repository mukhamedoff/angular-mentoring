import { registeredMenu, unRegisteredMenu } from './menu.lists';
import { Injectable } from '@angular/core';
import { Menu } from './menu.interface';

@Injectable({ providedIn: 'root' })
export class MenuService {
    registeredMenu = registeredMenu;
    unRegisteredMenu: Menu[] = unRegisteredMenu;

    getMenu(isAuthenticated: boolean, userInfo?: string): Menu[] {
        return isAuthenticated ? this.registeredMenu({userInfo}) : this.unRegisteredMenu;
    }
}
