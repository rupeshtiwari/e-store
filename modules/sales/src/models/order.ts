import { OrderItem } from './order-item';

import { Product } from './product';
import { OrderId, CustomerId } from 'e-store-typings';

export class Order {
    constructor(
        id: OrderId,
        customerId: CustomerId,
        items: OrderItem[],
        placedOn: string
    ) { }
}

