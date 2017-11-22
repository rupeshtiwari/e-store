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

export const NAVIGATE_CART_PAGE = 'NAVIGATE_CART_PAGE';

export interface NavigateCartPageAction extends Action {
    type: typeof NAVIGATE_CART_PAGE;
    payload: [{ productId: ProductId, quantity: number }];
}
export * from './ids';

export * from './cart';
