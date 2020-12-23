import { Action } from '@ngrx/store';

export enum authActionsType {
    changeLoginStatus = '[AUTH] set login status',
    saveToken = '[AUTH] save token'
}

export class AuthChangeLoginStatusAction implements Action {
    readonly type = authActionsType.changeLoginStatus;
    constructor(public payload: {
        isLogin: boolean
    }) {}
}

export class AuthSaveTokenAction implements Action {
    readonly type = authActionsType.saveToken;
    constructor(public payload: {
        token: string
    }) {}
}

export type AuthActions = AuthChangeLoginStatusAction
    | AuthSaveTokenAction;