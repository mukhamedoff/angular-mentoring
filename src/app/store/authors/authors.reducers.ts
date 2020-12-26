import { Menu } from './../../shared/menu/menu.interface';
import { createReducer, on } from '@ngrx/store';
import { MenuActions, menuActionsType } from './menu.actions';
import { unRegisteredMenu } from 'src/app/shared/menu/menu.lists';

export const menuNode = 'menu';

export interface MenuState {
    menuList: Array<Menu>
} 

export const initialState = {
    menuList: unRegisteredMenu
};

export const MenuReducer = (state = initialState, action: MenuActions) => {
    switch(action.type) {
        case menuActionsType.changeMenuList:
            return {
                ...state,
                menuList: action.payload.menuList
            }
        default:
            return state;
    }
}
