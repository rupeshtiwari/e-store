import { Action } from '@ngrx/store';
import { ProductId } from './ids';

export abstract class Dictionary<T> {
    [id: string]: T;
};

// tslint:disable-next-line:no-empty-interface
export interface State {

};

export const NAVIGATE_PRODUCTS_PAGE = 'NAVIGATE_PRODUCTS_PAGE';

export interface NavigateProductsPageAction extends Action {
    type: typeof NAVIGATE_PRODUCTS_PAGE;
    payload: any;
}

export const LOADING = 'LOADING';

export interface IsLoadingAction extends Action {
    type: typeof LOADING;
    payload: boolean;
}

export * from './ids';

export * from './cart';
