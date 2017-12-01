import { Action } from '@ngrx/store';

import { CartItem } from '../../modules/sales/src/models/cart-item';

export const ADD_TO_CART_SUCCESS = '[Sales][Cart] add success';
export const CREATE_ORDER_SUCCESS = '[Sales][Cart] create order success';

export interface IAddToCartSuccessPayload<T> {
    item: T;
};

export interface ICreateOrderSuccessPayload<T> {
    order: T;
}

export interface IAddToCartSuccess<T> extends Action {
    type: typeof ADD_TO_CART_SUCCESS;
    payload: IAddToCartSuccessPayload<T>;
}

export interface ICreateOrderSuccess<T> extends Action {
    type: typeof CREATE_ORDER_SUCCESS;
    payload: ICreateOrderSuccessPayload<T>;
}
