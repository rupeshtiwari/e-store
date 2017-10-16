import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItems from 'modules/items/src/reducers/product';
import * as fromRoot from 'app/reducers';
import * as fromAddProductForm from '../reducers/add-product-form';
import { Product } from "modules/items/src";

export const reducers = {
    items: fromItems.reducer,
    addForm: fromAddProductForm.reducer
};

export interface ItemsState {
    items: fromItems.State,
    addForm: fromAddProductForm.State
}

export interface State extends fromRoot.State {
    'items': ItemsState;
}

export const getItemsState = createFeatureSelector<ItemsState>('items');

export const getAddFormState = createSelector(
    getItemsState,
    (state: ItemsState) => state.addForm
);

export const getItemsEntitiesState = createSelector(
    getItemsState,
    (state) => state.items
);

export const getProductFromAddForm = createSelector(
    getAddFormState,
    (state: fromAddProductForm.State) => new Product(state.id, state.name)
);

export const getItemsEntities = createSelector(
    getItemsEntitiesState,
    (state) => state.entities
);

export const getAllItemIds = createSelector(
    getItemsEntitiesState,
    (state) => state.ids
);


