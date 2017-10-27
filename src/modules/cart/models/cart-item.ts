import { ProductId } from "e-store-typings";

export class CartItem {
    id: string;
    productId : ProductId;
    quantity : number;
}