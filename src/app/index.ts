import { environment } from '../environments/environment';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';

// console.log all actions
export function logger(reducer: ActionReducer<fromTypes.State>): ActionReducer<fromTypes.State> {
    return function (state: fromTypes.State, action: any): fromTypes.State {
        console.log('------------------------');
        console.log('stateBefore', state);

        console.log('action', action);

        const newState = reducer(state, action);

        console.log('stateAfter', newState);

        console.log('------------------------');

        return newState;
    };
}

export const reducers : ActionReducerMap<fromTypes.State>= {

}

export const metaReducers: MetaReducer<fromTypes.State>[] = !environment.production
    ? [logger]
    : [];