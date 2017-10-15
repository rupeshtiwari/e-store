import { fromPromise } from 'rxjs/observable/fromPromise';
import { ActionReducer, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromItems from '../../modules/items/src/reducers';
import * as fromPricing from '../../modules/pricing/src/reducers';

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('------------------------');
        console.log('stateBefore', state);

        console.log('action', action);

        const newState = reducer(state, action);

        console.log('stateAfter', newState);

        console.log('------------------------');

        return newState;
    };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];

export interface State {

}

export const getAllProducts = createSelector(
    fromItems.getAllItemIds,
    fromItems.getItemsEntities,
    fromPricing.getPriceEntities,
    (ids, itemEntities, priceEntities) =>
        ids.map(id => (
            {
                id: id,
                name: (itemEntities[id]) ? itemEntities[id].name : '',
                price: (priceEntities[id]) ? priceEntities[id].price : ''
            })
        )
);