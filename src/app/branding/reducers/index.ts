import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';

import * as fromLayout from '../reducers/layout';

export * from 'e-store-typings';

export interface BrandingState {
    layout: fromLayout.State;
    routerReducer: fromRouter.RouterReducerState;
}

export interface State extends fromTypes.State {
    'branding': BrandingState;
}

export const reducers: ActionReducerMap<fromTypes.State> = {
    layout: fromLayout.reducer,
    routerReducer: fromRouter.routerReducer
};

export const getBrandingState = createFeatureSelector<BrandingState>('branding');

export const getLayoutState = createSelector(
    getBrandingState,
    (state: BrandingState) => state.layout
);

export const getShowSidenav = createSelector(
    getLayoutState,
    fromLayout.getShowSidenav
);
