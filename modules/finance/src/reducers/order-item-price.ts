import { OrderItemPrice } from '../models/order-item-price';
import { Dictionary, OrderId } from 'e-store-typings';

export interface State {
    ids: OrderId[];
    entities: Dictionary<OrderItemPrice>;
    selectedOrderId: OrderId;
}

export const initialState: State = {
    ids: [],
    entities: {},
    selectedOrderId: null
}

export function reducer(state = initialState, action) {
    return state;
}
export const getSelectedId =  (state: State) => state.selectedOrderId;
export const getEntities =  (state: State) => state.entities;