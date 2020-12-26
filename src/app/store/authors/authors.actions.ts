import { Author } from './../../shared/authors/authors.interface';
import { Action } from '@ngrx/store';

export enum authorsActionsType {
    changeAuthorsList = '[AUTHORS] set new authors list'
}

export class ChangeAuthorsListAction implements Action {
    readonly type = authorsActionsType.changeAuthorsList;
    constructor(public payload: {
        menuList: Array<Author>
    }) {}
}

export type MenuActions = ChangeAuthorsListAction;