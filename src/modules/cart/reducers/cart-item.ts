import { CartItem } from '../models/cart-item';
import { Dictionary, OrderId, ProductId } from 'e-store-typings';
import * as cartItem from '../actions/cart-item';
import * as fromTypes from 'e-store-typings';
import { curry, evolve, map, reduce, adjust, findIndex, propEq } from 'ramda';

export interface State {
    entities: CartItem[];
    loading: boolean;
}

export const initialState: State = {
    entities: []
    , loading: false
}

export function reducer(state = initialState, action: cartItem.Actions) {
    switch (action.type) {
        case fromTypes.ADD_TO_CART_SUCCESS: {
            return evolve({
                entities: entities => adjust(evolve({
                    quantity: _ => action.payload.quantity,
                    productId: _ => action.payload.productId
                }),
                    findIndex(propEq('productId', action.payload.productId), entities), entities),
                loading: _ => false
            }, state);
        }
        default: {
            return state;
        }
    }

}
export const getEntities = (state: State) => state.entities;