import * as cartItem from '../actions/cart-item';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { OrderId, Dictionary, CREATE_ORDER_SUCCESS } from 'e-store-typings';
import { add, adjust, append, assoc, compose, evolve, find, findIndex, inc, prop, propEq, reduce } from 'ramda';

export interface State {
    entities: Order[];
    loading: boolean;
}

export const initialState: State = {
    entities: [],
    loading: false
};

export function reducer(state: State = initialState, action: cartItem.Actions) {
    switch (action.type) {
        case cartItem.CREATE_ORDER: {
            return assoc('loading', true, state);
        }
        case CREATE_ORDER_SUCCESS: {
            return evolve({
                loading: _ => false,
                entities: entities => append(action.payload.order, entities)
            })(state);
        }
        default: {
            return state;
        }
    }
}

export const getEntities = (state: State) => state.entities;
