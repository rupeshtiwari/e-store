import { Product } from '../index';
import * as fromAddProductForm from '../actions/add-product-form';
import { assoc, evolve, always } from 'ramda';
import * as fromProducts from 'app/actions/product';

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
    action: fromAddProductForm.Actions | fromProducts.Actions
): State {
    switch (action.type) {
        case fromProducts.CREATE_PRODUCT_ID: {
            return evolve({ price: always(''), id: always(action.payload.id) }, state);
        }
        case fromAddProductForm.UPDATE_PRODUCT_FORM: {
            return assoc('price', action.payload.price, state);
        }
        default:
            return state;
    }
}