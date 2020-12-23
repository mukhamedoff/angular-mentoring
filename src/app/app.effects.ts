import { authActionsType, AuthChangeLoginStatusAction } from './store/auth/auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions) {}
}