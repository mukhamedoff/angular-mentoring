import { AuthState, authNode } from './auth.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectAuthFeature = createFeatureSelector<AuthState>(authNode);

export const selectIsLogin = createSelector(
    selectAuthFeature,
    (state: AuthState): boolean => state.isLogin
);