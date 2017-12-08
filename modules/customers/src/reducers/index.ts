import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user';
import * as fromTypes from 'e-store-typings';

export interface CustomersState {
    user: fromUser.State;
}

export const reducers: ActionReducerMap<CustomersState> = {
    user: fromUser.reducer
};

export interface State extends fromTypes.State {
    'customers': CustomersState;
}

export const getCustomersState = createFeatureSelector<CustomersState>('customers');

export const getUserState = createSelector(getCustomersState, state => state.user);


export const getUser = createSelector(getUserState, state => state.user);

export const getUserName = createSelector(getUser, user => user.name);
