import { Product } from '../index';
import { always, assoc, evolve } from 'ramda';

import * as fromAddForm from '../actions/add-product-form';
import * as fromPricing from '../actions/product';

export interface State {
    id: string,
    price: string
}

export const initialState: State = {
    id: null,
    price: null
}

export function reducer(
    state = initialState,
    action: fromPricing.Actions | fromAddForm.Actions
): State {
    switch (action.type) {
        case fromAddForm.CREATE_NEW_PRODUCT_ID: {
            return evolve({ price: always(''), id: always(action.payload.id) }, state);
        }
        case fromAddForm.UPDATE_PRODUCT_FORM: {
            return assoc('price', action.payload.price, state);
        }
        case fromPricing.CREATE_PRODUCT: {
            return evolve({ price: always(''), id: always('') }, state);
        }
        default:
            return state;
    }
}
export const getProduct = (state: State) => new Product(state.id, state.price);

export const getPrice =(state:State) => state.price;