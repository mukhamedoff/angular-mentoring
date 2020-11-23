import { Path as MenuPath } from './../path';
import { Menu } from './menu.interface';

export const registeredMenu: Menu[] = [{
    icon: 'person',
    title: 'User account',
    href: MenuPath.ACCOUNT
}, {
    icon: 'login',
    title: 'Log out',
    href: MenuPath.LOGOUT,
    action: 'logout'
}];

export const unRegisteredMenu: Menu[] = [{
    title: 'Log in',
    href: MenuPath.LOGIN,
    action: 'login'
}, {
    title: 'Register',
    href: MenuPath.REGISTER
}];
