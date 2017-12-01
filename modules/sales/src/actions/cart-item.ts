import { OrderItem } from '../models/order-item';
import { Action } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import {
    CREATE_ORDER_SUCCESS,
    IAddToCartSuccessPayload,
    ICreateOrderSuccess,
    ICreateOrderSuccessPayload,
    OrderId,
} from 'e-store-typings';

import { CartItem } from '../models/cart-item';
import { Order } from '../models/order';

export const ADD_TO_CART = '[Sales][Cart] Add to cart';
export const ADD_TO_CART_FAIL = '[Sales][Cart] Add to Fail';
export const CREATE_ORDER = '[Sales][Cart] Create Order';

export class AddToCart implements Action {
    readonly type = ADD_TO_CART;
    constructor(public payload: CartItem) { }
}

export class AddToCartFail implements Action {
    readonly type = ADD_TO_CART_FAIL;
    constructor(public payload: any) { }
}

export class AddToCartSuccessPayload implements IAddToCartSuccessPayload<CartItem> {
    constructor(public item: CartItem) { }
}

export class AddToCartSuccess implements fromTypes.IAddToCartSuccess<CartItem> {
    readonly type = fromTypes.ADD_TO_CART_SUCCESS;
    constructor(public payload: AddToCartSuccessPayload) { }
}

export class CreateOrderPayload {
    constructor(
        public order: Order
    ) { }
}

export class CreateOrderSuccessPayload implements ICreateOrderSuccessPayload<Order> {
    constructor(
        public order: Order
    ) { }
}

export class CreateOrder {
    readonly type = CREATE_ORDER;
    constructor(public payload: CreateOrderPayload) { }
}

export class CreateOrderSuccess implements ICreateOrderSuccess<Order> {
    readonly type = CREATE_ORDER_SUCCESS;
    constructor(public payload: CreateOrderSuccessPayload) { }
}

export type Actions =
    | AddToCart
    | AddToCartFail
    | CreateOrder
    | CreateOrderSuccess
    | AddToCartSuccess;
