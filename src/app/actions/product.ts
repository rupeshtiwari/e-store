import { Action } from '@ngrx/store';
export const CREATE_PRODUCT_ID = '[Products] Create ProductId';
export const CREATE_PRODUCT = '[Products] Create Product';

export class CreateProductId implements Action {
    readonly type = CREATE_PRODUCT_ID;
    constructor(public payload: { id: string }) {
    }
}

export class CreateProduct implements Action {
    readonly type = CREATE_PRODUCT;
    constructor(public payload? : {id:string}) {
    }
}

export type Actions = CreateProductId | CreateProduct;

