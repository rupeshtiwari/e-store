import { Product } from '../models/product';
import { Action } from '@ngrx/store';
export const CREATE_PRODUCT = '[Items] Create Product';


export class CreateProduct implements Action {
    readonly type = CREATE_PRODUCT;
    constructor(public payload: Product) {
    }
}

export type Actions = CreateProduct;
