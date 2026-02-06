import { Order } from "./orderData.type";
import { mockProducts } from "./productData";
import { mockUsers } from "./userData";

export const mockOrders: Order[] = [
    {
        id: 1,

        productInfo: mockProducts[0], // 유기농 당근

        orderTime: "25/05/28 - 03:05:51",
        orderPrice: "6,400원",

        userName: mockUsers[0].name,
        quantity: 2,

        storeName: mockUsers[0].storeName,
        storeAddress: mockUsers[0].address,

        orderStatus: "PENDING",
    },
    {
        id: 2,

        productInfo: mockProducts[1], // 브로콜리

        orderTime: "25/05/28 - 10:12:07",
        orderPrice: "8,400원",

        userName: mockUsers[1].name,
        quantity: 3,

        storeName: mockUsers[1].storeName,
        storeAddress: mockUsers[1].address,

        orderStatus: "PAID",
    },
    {
        id: 3,

        productInfo: mockProducts[2], // 양파

        orderTime: "25/05/29 - 14:33:19",
        orderPrice: "3,800원",

        userName: mockUsers[2].name,
        quantity: 2,

        storeName: mockUsers[2].storeName,
        storeAddress: mockUsers[2].address,

        orderStatus: "PREPARING",
    },
    {
        id: 4,

        productInfo: mockProducts[3], // 감자

        orderTime: "25/05/30 - 09:01:44",
        orderPrice: "7,500원",

        userName: mockUsers[3].name,
        quantity: 3,

        storeName: mockUsers[3].storeName,
        storeAddress: mockUsers[3].address,

        orderStatus: "SHIPPING",
    },
    {
        id: 5,

        productInfo: mockProducts[4],

        orderTime: "25/05/31 - 18:20:03",
        orderPrice: "11,200원",

        userName: mockUsers[4].name,
        quantity: 4,

        storeName: mockUsers[4].storeName,
        storeAddress: mockUsers[4].address,

        orderStatus: "DELIVERED",
    },
    {
        id: 6,

        productInfo: mockProducts[1],

        orderTime: "25/06/01 - 11:45:28",
        orderPrice: "5,600원",

        userName: mockUsers[0].name,
        quantity: 2,

        storeName: mockUsers[0].storeName,
        storeAddress: mockUsers[0].address,

        orderStatus: "CANCELLED",
    },
];
