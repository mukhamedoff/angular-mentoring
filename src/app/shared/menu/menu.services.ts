import { registeredMenu, unRegisteredMenu } from './menu.lists';
import { Injectable } from '@angular/core';
import { Menu } from './menu.interface';

@Injectable({ providedIn: 'root' })
export class MenuService {
    registeredMenu = registeredMenu;
    unRegisteredMenu: Menu[] = unRegisteredMenu;

    getMenu(isUserLogin: boolean, userInfo?: string): Menu[] {
        return isUserLogin ? this.registeredMenu({userInfo}) : this.unRegisteredMenu;
    }
}
