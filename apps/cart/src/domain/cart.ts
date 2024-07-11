import { Product } from "./product";

export interface Cart {
    totalItems: number;
    totalPrice: number;
    items: Product[];
}