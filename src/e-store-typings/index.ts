import { Action } from '@ngrx/store';
export type OrderId = string;
export type ProductId = string;
export type CustomerId = string;

export abstract class Dictionary<T> {
    [id: string]: T;
};

export interface State {

};

export const NAVIGATE_PRODUCTS_PAGE = 'NAVIGATE_PRODUCTS_PAGE'
export interface NavigateProductsPageAction extends Action {
    type: typeof NAVIGATE_PRODUCTS_PAGE;
    payload: any;
}

export * from './cart';