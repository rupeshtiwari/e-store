import { Product } from '../models/product';
import { Action } from '@ngrx/store';

export const LOAD_PRODUCTS = '[Sales] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[Sales] Load Products Success';
export const LOAD_PRODUCTS_FAIL = '[Sales] Load Products Fail';

export class LoadProducts implements Action {
    readonly type = LOAD_PRODUCTS;
    constructor() { }
}

export class LoadProductsSuccess implements Action {
    readonly type = LOAD_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}

export class LoadProductsFail implements Action {
    readonly type = LOAD_PRODUCTS_FAIL;
    constructor(public payload: any) { }
}

export type Actions =
    |LoadProducts
    | LoadProductsSuccess
    | LoadProductsFail;
