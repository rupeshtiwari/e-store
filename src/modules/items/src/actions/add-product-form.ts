import { Action } from '@ngrx/store';
import { Product } from "../models/product";

export const UPDATE_PRODUCT_FORM = '[Items] Update Product Form';
export const CREATE_NEW_PRODUCT_ID = '[Items] Create New Product Id'

export class CreateNewProductId implements Action {
    readonly type = CREATE_NEW_PRODUCT_ID;
    constructor(public payload: { id: string }) {

    }
}

export class UpdateProductForm implements Action {
    readonly type = UPDATE_PRODUCT_FORM;
    constructor(public payload: { name: string }) {

    }
}
export type Actions = UpdateProductForm | CreateNewProductId;
