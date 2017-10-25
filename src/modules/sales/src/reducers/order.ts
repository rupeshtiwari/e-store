import { Product } from '../models/product';
import { Item, Order } from '../models/order';
import { OrderId, Dictionary } from "e-store-typings";

export interface State {
    ids: OrderId[];
    entities: Dictionary<Order>;
    selectedOrderId: string;
}

export const initialState: State = {
    ids: [],
    entities: {},
    selectedOrderId: null
}

export const initialState1: State = {
    ids: ['1'],
    selectedOrderId: '1',
    entities: {
        '1': Order.create({
            id: '1',
            customerId: 'c1',
            placedAt: Date.now().toString(),
            items: [
                Item.create({
                    id: '1',
                    orderId: '1',
                    product: Product.create({
                        id: 'p1',
                        name: 'pen'
                    })
                })
            ]
        })
    }
}

export function reducer(state = initialState, action) {
    return state;
}
export const getSelectedId =  (state: State) => state.selectedOrderId;
export const getEntities =  (state: State) => state.entities;