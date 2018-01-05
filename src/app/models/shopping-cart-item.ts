import { Product } from "app/models/product";

export interface ShoppingCartItem {
    product: Product;
    quantity: number;
}