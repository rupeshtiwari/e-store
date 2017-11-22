import { CartItem } from '../models/cart-item';
import { Action } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { ProductId } from 'e-store-typings';

export const ADD_TO_CART = '[Cart] Add to cart';
export const ADD_TO_CART_FAIL = '[Cart] Add to Fail';

export class AddToCart implements Action {
    readonly type = ADD_TO_CART;
    constructor(public payload: CartItem) { }
}


export class AddToCartFail implements Action {
    readonly type = ADD_TO_CART_FAIL;
    constructor(public payload: any) { }
}

export class AddToCartSuccess implements fromTypes.AddToCartSuccess {
    readonly type = fromTypes.ADD_TO_CART_SUCCESS;
    constructor(public payload: { productId: ProductId, quantity: number, id: string }) { }
}

export type Actions =
    | AddToCart
    | AddToCartFail
    | AddToCartSuccess;
