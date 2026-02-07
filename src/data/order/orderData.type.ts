import { Product } from "../product/productData.type";

export type Order = {
    id: number;
    productInfo: Product;
    orderTime: string;
    orderPrice: string;
    userName: string;
    quantity: number;
    storeName: string;
    storeAddress: string;
    orderStatus:
        | "PENDING"
        | "PAID"
        | "PREPARING"
        | "SHIPPING"
        | "DELIVERED"
        | "CANCELLED";
};
