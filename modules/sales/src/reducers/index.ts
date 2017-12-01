import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { ProductId } from 'e-store-typings';
import { compose, values } from 'ramda';

import * as fromCart from './cart-item';
import * as fromOrders from './order';
import * as fromProducts from './product';


export interface SalesState {
    orders: fromOrders.State;
    products: fromProducts.State;
    cart: fromCart.State;
}

export const reducers: ActionReducerMap<SalesState> = {
    orders: fromOrders.reducer,
    products: fromProducts.reducer,
    cart: fromCart.reducer,
};

export interface State extends fromTypes.State {
    'sales': SalesState;
}

export const getSalesState = createFeatureSelector<SalesState>('sales');

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
    (entities) => entities
);

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
);

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

export const getCartEntitiesState = createSelector(
    getSalesState,
    (state: SalesState) => state.cart
);

export const getCartEntities = createSelector(
    getCartEntitiesState,
    fromCart.getEntities
);

export const getTotalCount = createSelector(
    getCartEntitiesState,
    fromCart.getTotalCount
);

export const getCountByProductId = (productId: ProductId) => createSelector(
    getCartEntitiesState,
    fromCart.getCountByProductId(productId)
);

export const getAllCartItems = createSelector(
    getCartEntitiesState,
    fromCart.getEntities
);

export const getCartProductIds = createSelector(
    getCartEntitiesState,
    fromCart.getProductIds
);

export const isCartLoading = createSelector(
    getCartEntitiesState,
    fromCart.isLoading
);
