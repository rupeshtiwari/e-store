import { ProductId } from 'e-store-typings';

export class Product {
    id: ProductId;
    name: string;
    imageLink?: string;
    static create(obj: Product): Product {
        const product = new Product();
        return Object.assign({}, product, obj);
    }
}
