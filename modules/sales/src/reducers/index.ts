import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { curry, values, compose, pipe } from 'ramda';

import * as fromOrders from './order';
import * as fromProducts from './product';

export const reducers: ActionReducerMap<SalesState> = {
    orders: fromOrders.reducer,
    products: fromProducts.reducer
}

export interface SalesState {
    orders: fromOrders.State;
    products: fromProducts.State;
}

export interface State extends fromTypes.State {
    'sales': SalesState;
}

export const getSalesState = createFeatureSelector<SalesState>('sales');

//------ORDERS
export const getOrderEntitiesState = createSelector(
    getSalesState,
    (state: SalesState) => state.orders
);

export const getOrderEntities = createSelector(
    getOrderEntitiesState,
    fromOrders.getEntities
);

export const getAllOrders = createSelector(
    getOrderEntities,
    (entities) => values(entities)
);

export const getSelectedOrderId = createSelector(
    getOrderEntitiesState,
    fromOrders.getSelectedId
);

export const getSelectedOrder = createSelector(
    getOrderEntities,
    getSelectedOrderId,
    (entities, selectedId) => selectedId && entities[selectedId]
);

//----Products

export const getProductEntitiesState = createSelector(
    getSalesState,
    (state: SalesState) => state.products
);

export const getProductEntities = createSelector(
    getProductEntitiesState,
    fromProducts.getEntities
);

export const getAllProducts = createSelector(
    getProductEntities,
    (entities) => values(entities)
);
export const getAllProductIds = createSelector(
    getProductEntitiesState,
    fromProducts.getAllIds
)
export const getSelectedProductId = createSelector(
    getProductEntitiesState,
    fromProducts.getSelectedId
);

export const getSelectedProduct = createSelector(
    getProductEntities,
    getSelectedProductId,
    (entities, selectedId) => selectedId && entities[selectedId]
);

export const getProductById = (id: fromTypes.ProductId) => createSelector(
    getProductEntitiesState,
    fromProducts.getProductById(id)
);

export const getProductNameById = (id: fromTypes.ProductId) => createSelector(
    getProductEntitiesState,
    compose(
        fromProducts.getName,
        fromProducts.getProductById(id)
    )
);

export const getProductImageLinkById = (id: fromTypes.ProductId) => createSelector(
    getProductEntitiesState,
    compose(
        fromProducts.getImageLink,
        fromProducts.getProductById(id)
    )
);

