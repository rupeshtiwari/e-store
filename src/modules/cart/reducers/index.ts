import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { compose, values } from 'ramda';

import * as fromCartItem from './cart-item';

export const reducers = {
    cartItems: fromCartItem.reducer,
}

export interface CartState {
    cartItems: fromCartItem.State;
}

export interface State extends fromTypes.State {
    'cart': CartState;
}

export const getCartState = createFeatureSelector<CartState>('cart');
