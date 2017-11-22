import { Action } from '@ngrx/store';

import { ProductId } from './ids';


export const ADD_TO_CART_SUCCESS = '[Cart] add success';

export interface CartItem {
    productId: ProductId;
    quantity: number;
    id: string;
};

export interface AddToCartSuccess extends Action {
    type: typeof ADD_TO_CART_SUCCESS;
    payload: CartItem;
}
