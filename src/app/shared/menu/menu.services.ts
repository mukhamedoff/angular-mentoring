import { registeredMenu, unRegisteredMenu } from './menu.lists';
import { Injectable } from '@angular/core';
import { Menu } from './menu.interface';

@Injectable({ providedIn: 'root' })
export class MenuService {
    registeredMenu: Menu[] = registeredMenu;
    unRegisteredMenu: Menu[] = unRegisteredMenu;

    getMenu(isUserLogin: boolean): Menu[] {
        return isUserLogin ? this.registeredMenu : this.unRegisteredMenu;
    }
}
