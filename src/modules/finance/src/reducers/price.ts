import { Dictionary, ProductId } from 'e-store-typings';
import { curry, evolve, map, reduce } from 'ramda';

import * as fromPrice from '../actions/price';
import { Price } from '../models/price';

export interface State {
    ids: ProductId[];
    entities: Dictionary<Price>;
    selectedProductId: ProductId;
    loading: boolean;
}

export const initialState: State = {
    ids: [],
    entities: {},
    selectedProductId: null,
    loading: null
}

export function reducer(state = initialState, action: fromPrice.Actions) {
    switch (action.type) {
        case fromPrice.LOAD_PRICES: {
            return evolve({ loading: _ => true }, state);
        }
        case fromPrice.LOAD_PRICES_SUCCESS: {
            return evolve({
                ids: _ => map((price: Price) => price.id, action.payload),
                entities: _ => reduce(
                    (products: Dictionary<Price>, price: Price) => {
                        products[price.id] = price;
                        return products;
                    }
                    , {}
                    , action.payload),
                selectedProductId: _ => null,
                loading: _ => false
            }, state);
        }
        default: {
            return state;
        }
    }
}
export const getSelectedId = (state: State) => state.selectedProductId;
export const getEntities = (state: State) => state.entities;
export const getProductById = curry((id: ProductId, state: State) => id && state.entities[id]);
export const getAllIds = (state: State) => state.ids;
export const getPrice = (price: Price) => price.price;