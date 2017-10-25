import { Product } from './product';
import { OrderId, CustomerId } from 'e-store-typings';

export class Order {
    id: OrderId;
    customerId: CustomerId;
    items: Item[];
    placedAt: string;

    static create(obj: Order): Order {
        const order = new Order();
        return Object.assign({}, order, obj);
    }
}

export class Item {
    id: string;
    product: Product;
    orderId: OrderId;

    static create(obj: Item): Item {
        const item = new Item();
        return Object.assign({}, item, obj);
    }
}