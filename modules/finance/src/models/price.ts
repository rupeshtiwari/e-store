import { ProductId } from 'e-store-typings';

export class Price {
    id: ProductId;
    price: string;
    productId: ProductId;
    static create(obj: Price): Price {
        const price = new Price();
        return Object.assign({}, price, obj);
    }
}