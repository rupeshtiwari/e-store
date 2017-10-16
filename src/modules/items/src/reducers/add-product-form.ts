import { Product } from '../index';
import * as fromAddProductForm from '../actions/add-product-form';
import { assoc, evolve, always } from 'ramda';
import * as fromProducts from 'app/actions/product';

export interface State {
    id: string,
    name: string
}

export const initialState: State = {
    id: null,
    name: null
}

export function reducer(
    state = initialState,
    action: fromAddProductForm.Actions | fromProducts.Actions
): State {
    switch (action.type) {
        case fromProducts.CREATE_PRODUCT_ID: {
            return evolve({ name: always(''), id: always(action.payload.id) }, state);
        }
        case fromAddProductForm.UPDATE_PRODUCT_FORM: {
            return assoc('name', action.payload.name, state);
        }
        default:
            return state;
    }
}