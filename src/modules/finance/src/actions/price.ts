import { Price } from '../models/price';
import { Action } from '@ngrx/store';

export const LOAD_PRICES = '[Finance] Load Prices';
export const LOAD_PRICES_SUCCESS = '[Finance] Load Prices Success';
export const LOAD_PRICES_FAIL = '[Finance] Load Prices Fail';

export class LoadPrices implements Action {
    readonly type = LOAD_PRICES;
    constructor() { }
}

export class LoadPricesSuccess implements Action {
    readonly type = LOAD_PRICES_SUCCESS;
    constructor(public payload: Price[]) { }
}

export class LoadPricesFail implements Action {
    readonly type = LOAD_PRICES_FAIL;
    constructor(public payload: any) { }
}

export type Actions =
    |LoadPrices
    | LoadPricesSuccess
    | LoadPricesFail