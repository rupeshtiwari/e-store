import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user';
import * as fromTypes from 'e-store-typings';
import * as fromLogin from './login';

export interface CustomersState {
    user: fromUser.State;
    login: fromLogin.State;
}

export const reducers: ActionReducerMap<CustomersState> = {
    user: fromUser.reducer,
    login: fromLogin.reducer
};

export interface State extends fromTypes.State {
    'customers': CustomersState;
}

export const getCustomersState = createFeatureSelector<CustomersState>('customers');

export const getUserState = createSelector(getCustomersState, state => state.user);

export const getUser = createSelector(getUserState, state => state.user);

export const getUserName = createSelector(getUser, user => user.name);

export const getLoggedIn = createSelector(getUserState, fromUser.getLoggedIn);

export const getLoginState = createSelector(getCustomersState, state => state.login);

export const getLoginPageError = createSelector(
    getLoginState,
    fromLogin.getError
);

export const getLoginPagePending = createSelector(
    getLoginState,
    fromLogin.getPending
);
