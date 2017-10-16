import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store/src/selector';

import { reducer } from "modules/pricing/src/reducers/product";
import * as fromRoot from 'app/reducers';
import * as fromPricing from '../reducers/product';
import * as fromAddProductForm from '../reducers/add-product-form';
import { Product } from "modules/pricing/src";

export const reducers = {
    prices: fromPricing.reducer,
    addForm: fromAddProductForm.reducer
}

export interface PricingState {
    prices: fromPricing.State,
    addForm: fromAddProductForm.State
}

export interface State extends fromRoot.State {
    'prices': PricingState,
}

export const getPricingState = createFeatureSelector<PricingState>('prices');

export const getAddFormState = createSelector(
    getPricingState,
    (state: PricingState) => state.addForm
);

export const getProductFromAddForm = createSelector(
    getAddFormState,
    (state: fromAddProductForm.State) => new Product(state.id, state.price)
);

export const getPricingEntitiesState = createSelector(
    getPricingState,
    (state: PricingState) => state.prices
);

export const getPriceById = (id: string) => createSelector(
    getPricingEntitiesState,
    (state: fromPricing.State) => fromPricing.getEntityById(state, id)
);

export const getPriceEntities = createSelector(
    getPricingEntitiesState,
    (state) => state.entities
);