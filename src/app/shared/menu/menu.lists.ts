import { Path as MenuPath } from './../path';
import { Menu } from './menu.interface';

export const registeredMenu = ({userInfo}): Menu[] => {
    return [{
        icon: 'person',
        title: userInfo || 'User account',
        href: MenuPath.ACCOUNT
    }, {
        icon: 'login',
        title: 'MENU.LOG_OUT',
        href: MenuPath.LOGOUT,
        action: 'logout'
    }]
};

export const unRegisteredMenu: Menu[] = [{
    title: 'MENU.LOG_IN',
    href: MenuPath.LOGIN,
    action: 'login'
}, {
    title: 'MENU.REGISTRATION',
    href: MenuPath.REGISTER
}];
