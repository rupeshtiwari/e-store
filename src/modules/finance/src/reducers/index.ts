import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { compose, values } from 'ramda';

import * as fromOrderItem from './order-item-price';
import * as fromPrice from './price';

export const reducers = {
    orders: fromOrderItem.reducer,
    prices: fromPrice.reducer
}

export interface FinanceState {
    orders: fromOrderItem.State;
    prices: fromPrice.State;
}

export interface State extends fromTypes.State {
    'finance': FinanceState;
}

export const getFinanceState = createFeatureSelector<FinanceState>('finance');

//------ORDERS
export const getOrderEntitiesState = createSelector(
    getFinanceState,
    (state: FinanceState) => state.orders
);

export const getOrderEntities = createSelector(
    getOrderEntitiesState,
    fromOrderItem.getEntities
);

export const getAllOrders = createSelector(
    getOrderEntities,
    (entities) => values(entities)
);

export const getSelectedOrderId = createSelector(
    getOrderEntitiesState,
    fromOrderItem.getSelectedId
);

export const getSelectedOrder = createSelector(
    getOrderEntities,
    getSelectedOrderId,
    (entities, selectedId) => selectedId && entities[selectedId]
);

//----Prices

export const getPriceEntitiesState = createSelector(
    getFinanceState,
    (state: FinanceState) => state.prices
);

export const getPriceEntities = createSelector(
    getPriceEntitiesState,
    fromPrice.getEntities
);

export const getAllProducts = createSelector(
    getPriceEntities,
    (entities) => values(entities)
);
export const getAllProductIds = createSelector(
    getPriceEntitiesState,
    fromPrice.getAllIds
)
export const getSelectedProductId = createSelector(
    getPriceEntitiesState,
    fromPrice.getSelectedId
);

export const getSelectedProduct = createSelector(
    getPriceEntities,
    getSelectedProductId,
    (entities, selectedId) => selectedId && entities[selectedId]
);

export const getProductById = (id: fromTypes.ProductId) => createSelector(
    getPriceEntitiesState,
    fromPrice.getProductById(id)
);

export const getProductPriceById = (id: fromTypes.ProductId) => createSelector(
    getPriceEntitiesState,
    (state) => {
        return compose(
            fromPrice.getPrice,
            fromPrice.getProductById(id)
        )(state);
    }
)
