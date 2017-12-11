import { Action } from '@ngrx/store';

export const LOGIN_REDIRECT = '[Auth] Login Redirect';
export const LOGOUT = '[Auth] Logout';

export interface LoginRedirect extends Action {
    type: typeof LOGIN_REDIRECT;
}

export interface Logout extends Action {
    type: typeof LOGOUT;
}
