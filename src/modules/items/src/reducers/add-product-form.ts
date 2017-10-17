import { Product } from '../index';
import * as fromAddForm from '../actions/add-product-form';
import { assoc, evolve, always } from 'ramda';
import * as fromItems from '../actions/product';

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
    action: fromAddForm.Actions | fromItems.Actions
): State {
    switch (action.type) {
        case fromAddForm.CREATE_NEW_PRODUCT_ID: {
            return evolve({ name: always(''), id: always(action.payload.id) }, state);
        }
        case fromAddForm.UPDATE_PRODUCT_FORM: {
            return assoc('name', action.payload.name, state);
        }
        case fromItems.CREATE_PRODUCT: {
            return evolve({ name: always(''), id: always('') }, state);
        }
        default:
            return state;
    }
}

export const getProduct = (state: State) => new Product(state.id, state.name);

export const getName  =(state:State) => state.name;