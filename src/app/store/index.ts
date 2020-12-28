import { coursesNode, CoursesState, CoursesReducer } from './courses/courses.reducers';
import { menuNode, MenuState, MenuReducer } from './menu/menu.reducers';
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from './../../environments/environment';
import { AuthReducer, AuthState, authNode } from './auth/auth.reducer';

export interface State {
    [authNode]: AuthState,
    [menuNode]: MenuState,
    [coursesNode]: CoursesState
};

export const reducers: ActionReducerMap<State> = {
    [authNode]: AuthReducer,
    [menuNode]: MenuReducer,
    [coursesNode]: CoursesReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];