export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    createdAt: string;
};

export type Category = {
    id: number;
    label: string;
    value: "ALL" | "VEGETABLE" | "FRUIT";
};
