import { Product } from '../models/product';
import { OrderId, Dictionary, ProductId } from 'e-store-typings';
import * as fromProduct from '../actions/product';
import { map, evolve, objOf, F, reduce, T, curry, head, pipe } from 'ramda';

export interface State {
    ids: ProductId[];
    entities: Dictionary<Product>;
    selectedProductId: ProductId;
    loading: boolean;
}

export const initialState: State = {
    ids: [],
    entities: {},
    selectedProductId: null,
    loading: null
};

export function reducer(state = initialState, action: fromProduct.Actions) {
    switch (action.type) {
        case fromProduct.LOAD_PRODUCTS: {
            return evolve({ loading: _ => true }, state);
        }
        case fromProduct.LOAD_PRODUCTS_SUCCESS: {
            return evolve({
                ids: _ => map((product: Product) => product.id, action.payload),
                entities: _ => reduce(
                    (products: Dictionary<Product>, product: Product) => {
                        products[product.id] = product;
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
export const getName = (product: Product) => product.name;
export const getImageLink = (product: Product) => product.imageLink;