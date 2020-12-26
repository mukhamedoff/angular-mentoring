import { Menu } from './../../shared/menu/menu.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { menuNode, MenuState } from './menu.reducers';

export const selectMenuFeature = createFeatureSelector<MenuState>(menuNode);

export const selectMenuList = createSelector(
    selectMenuFeature,
    (state: MenuState): Array<Menu> => state.menuList
);