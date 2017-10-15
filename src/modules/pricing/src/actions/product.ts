import { Product } from '../models/product';
import { Action } from '@ngrx/store';

export const ADD = '[Pricing] Add';

export class Add implements Action {
    readonly type = ADD;
    constructor(public payload: Product) { }
}

export type Actions = Add;