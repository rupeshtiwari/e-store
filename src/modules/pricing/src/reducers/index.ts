import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store/src/selector';

import { reducer } from "modules/pricing/src/reducers/product";
import * as fromRoot from 'app/reducers';
import * as fromPricing from '../reducers/product';

export const reducers = {
    prices : fromPricing.reducer
}

export interface PricingState {
    prices:  fromPricing.State
}

export interface State  extends fromRoot.State {
    'prices': PricingState
}

export const getPricingState  = createFeatureSelector<PricingState>('prices');

export const getPricingEntitiesState = createSelector(
getPricingState,
(state: PricingState)=> state.prices
);

export const getPriceById = (id:string)=> createSelector(
    getPricingEntitiesState,
(state:fromPricing.State) => fromPricing.getEntityById(state, id)
);

export const getPriceEntities = createSelector(
    getPricingEntitiesState,
    (state) => state.entities
);