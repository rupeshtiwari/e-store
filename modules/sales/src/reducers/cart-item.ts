import { createSelector } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { ProductId } from 'e-store-typings';
import { add, adjust, append, assoc, compose, evolve, find, findIndex, inc, prop, propEq, reduce } from 'ramda';

import * as cartItem from '../actions/cart-item';
import { CartItem } from '../models/cart-item';

export interface State {
    entities: CartItem[];
    loading: boolean;
}

export const initialState: State = {
    entities: []
    , loading: false
};

export function reducer(state = initialState, action: cartItem.Actions) {
    switch (action.type) {
        case cartItem.ADD_TO_CART: {
            return assoc('loading', true, state);
        }
        case fromTypes.ADD_TO_CART_SUCCESS: {
            const payload = action.payload;
            const entityIndex = findIndex(
                propEq(
                    'productId',
                    payload.item.productId
                ),
                state.entities
            );
            if (entityIndex < 0) {
                return evolve({
                    entities: entities => append({ ...payload.item }, entities)
                    ,
                    loading: _ => false
                }, state);
            } else {
                return evolve({
                    entities: entities => adjust(evolve({
                        quantity: q => inc(q)
                    }), entityIndex, entities)
                    ,
                    loading: _ => false
                }, state);
            }
        }
        default: {
            return state;
        }
    }

}

export const getEntities = (state: State) => state.entities;

export const getProductIds = createSelector(
    getEntities,
    entities => entities.map(e => e.productId)
);

export const getTotalCount = createSelector(
    getEntities,
    (entities) => reduce(
        (count: number, cartItem: CartItem) =>
            add(count, cartItem.quantity), 0, entities)
);

export const isLoading = (state: State) => state.loading;

export const getCountByProductId = (productId: ProductId) => createSelector(
    getEntities,
    compose(
        prop('quantity'),
        find(propEq('productId', productId))
    )
);
