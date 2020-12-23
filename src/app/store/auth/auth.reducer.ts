import { createReducer, on } from '@ngrx/store';
import { AuthActions, authActionsType } from './auth.actions';

export const authNode = 'auth';

export interface AuthState {
    isLogin: boolean
} 

export const initialState = {
    isLogin: false
};

export const AuthReducer = (state = initialState, action: AuthActions) => {
    switch(action.type) {
        case authActionsType.changeLoginStatus:
            return {
                ...state,
                isLogin: action.payload.isLogin
            }
        case authActionsType.saveToken:
            return {
                ...state,
                token: action.payload.token
            }
        default:
            return state;
    }
}
