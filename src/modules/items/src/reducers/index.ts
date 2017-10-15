import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItems from 'modules/items/src/reducers/product';
import * as fromRoot from 'app/reducers';

export const reducers = {
    items: fromItems.reducer
};

export interface ItemsState {
    items: fromItems.State
}

export interface State extends fromRoot.State {
    items: ItemsState;
}

export const getItemsState = createFeatureSelector<ItemsState>('items');

export const getItemsEntitiesState = createSelector(
    getItemsState,
    (state) => state.items
);


export const getItemsEntities = createSelector(
    getItemsEntitiesState,
    (state) => state.entities
);

export const getAllItemIds = createSelector(
    getItemsEntitiesState,
    (state) => state.ids
);


