import { Product } from '../models/product';
import { Action } from '@ngrx/store';

export const CREATE_PRODUCT = '[Pricing] Create Product';

export class CreateProduct implements Action {
    readonly type = CREATE_PRODUCT;
    constructor(public payload: Product) { }
}

export class AddNewItemId {}

export type Actions = CreateProduct;
