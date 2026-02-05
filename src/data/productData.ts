import { Category, Product } from "./productData.type";

export const products: Product[] = [
    {
        id: "1",
        name: "유기농 당근",
        price: 3200,
        image: "https://picsum.photos/seed/carrot/1200/1200",
        createdAt: "2026-02-01",
    },
    {
        id: crypto.randomUUID(),
        name: "브로콜리",
        price: 2800,
        image: "https://picsum.photos/seed/broccoli/1200/1200",
        createdAt: "2026-02-02",
    },
    {
        id: crypto.randomUUID(),
        name: "양파",
        price: 1900,
        image: "https://picsum.photos/seed/onion/1200/1200",
        createdAt: "2026-02-03",
    },
    {
        id: crypto.randomUUID(),
        name: "감자",
        price: 2500,
        image: "https://picsum.photos/seed/potato/1200/1200",
        createdAt: "2026-02-04",
    },
    {
        id: crypto.randomUUID(),
        name: "방울토마토",
        price: 4500,
        image: "https://picsum.photos/seed/tomato/1200/1200",
        createdAt: "2026-02-05",
    },
    {
        id: crypto.randomUUID(),
        name: "사과",
        price: 3500,
        image: "https://picsum.photos/seed/apple/1200/1200",
        createdAt: "2026-02-06",
    },
];

export const categories: Category[] = [
    { id: 0, label: "전체", value: "ALL" },
    { id: 1, label: "채소", value: "VEGETABLE" },
    { id: 2, label: "과일", value: "FRUIT" },
];
