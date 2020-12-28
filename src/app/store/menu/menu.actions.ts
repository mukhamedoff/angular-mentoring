import { Menu } from './../../shared/menu/menu.interface';
import { Action } from '@ngrx/store';

export enum menuActionsType {
    changeMenuList = '[MENU] set new menu list'
}

export class ChangeMenuListAction implements Action {
    readonly type = menuActionsType.changeMenuList;
    constructor(public payload: {
        menuList: Array<Menu>
    }) {}
}

export type MenuActions = ChangeMenuListAction;