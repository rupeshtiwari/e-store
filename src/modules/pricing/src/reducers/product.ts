import { Product } from '../models/product';
import * as pricing from '../actions/product';
import { append, assoc, evolve } from 'ramda';

export interface State {
    ids: string[],
    entities: {}
};

export const initialState: State = {
    ids: ['ice-cream-id'],
    entities: {
        'ice-cream-id': new Product('ice-cream-id', '23')
    }
};

export function reducer(
    state = initialState,
    action: pricing.Actions
): State {
    switch (action.type) {
        case pricing.ADD: {
            return evolve({
                ids: ids => append(action.payload.id, ids),
                entities: e => assoc(action.payload.id, action.payload, e)
            }, state);
        }
        default:
            return state;
    }
}

export const getEntityById = (state: State, id: string) => state.entities[id];