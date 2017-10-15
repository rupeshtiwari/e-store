import { append, assoc, evolve } from 'ramda';

import * as items from '../actions/product';
import { Product } from '../models/product';

export interface State {
    ids: string[],
    entities: {}
};

export const initialState = {
    ids: ['ice-cream-id'],
    entities: {
        'ice-cream-id': new Product('ice-cream-id', 'Ice Cream')
    }
};

export function reducer(
    state = initialState,
    action: items.Actions
): State {
    switch (action.type) {
        case items.ADD: {
            return evolve({
                ids: ids => append(action.payload.id, ids),
                entities: e => assoc(action.payload.id, action.payload, e)
            }, state);
        }
        default:
            return state;
    }
}