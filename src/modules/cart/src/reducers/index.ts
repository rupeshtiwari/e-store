import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { compose, values } from 'ramda';

import * as fromCartItem from './cart-item';
import { ProductId } from "e-store-typings";

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

export const getCartItemsState = createSelector(
    getCartState,
    (state) => state.cartItems
);

export const getAllCartItems = createSelector(
    getCartItemsState,
    fromCartItem.getEntities
);

export const getTotalCount = createSelector(
    getCartItemsState,
    fromCartItem.getTotalCount
);

export const getCountByProductId =(productId:ProductId)=> createSelector(
    getCartItemsState,
    fromCartItem.getCountByProductId(productId)
);

export const isLoading = createSelector(
    getCartItemsState,
    fromCartItem.isLoading
);