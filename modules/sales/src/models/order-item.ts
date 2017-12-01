import { OrderId, ProductId } from 'e-store-typings';

import { Product } from './product';

export class OrderItem {
    constructor(
        public id: string,
        public productId: ProductId,
        public quantity: number
    ) { }
}
