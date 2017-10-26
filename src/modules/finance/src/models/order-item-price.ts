import { OrderId, CustomerId, ProductId } from 'e-store-typings';

export class OrderItemPrice {
    id: string;
    orderId: OrderId;
    productId: ProductId;
    itemPrice: string;

    static create(obj: OrderItemPrice): OrderItemPrice {
        const order = new OrderItemPrice();
        return Object.assign({}, order, obj);
    }
}
 