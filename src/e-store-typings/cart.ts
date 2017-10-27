
import { Action } from '@ngrx/store';
import { ProductId } from "e-store-typings";

export const ADD_TO_CART_SUCCESS = '[Cart] add success';
export interface AddToCartSuccess extends Action {
    type: typeof ADD_TO_CART_SUCCESS;
    payload: { productId: ProductId , quantity: number}
}
