import { registeredMenu, unRegisteredMenu } from './menu.lists';
import { Menu } from './menu.interface';

export const menuServiceMock = {
    registeredMenu,
    unRegisteredMenu,
    getMenu(isUserLogin: boolean): Menu[] {
        return isUserLogin ? this.registeredMenu : this.unRegisteredMenu;
    }
};
