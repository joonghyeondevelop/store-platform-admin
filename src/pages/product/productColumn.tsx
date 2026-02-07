import { Column } from "../../components/table/DataTable/dataTable.type";
import { Product } from "../../data/product/productData.type";

const productColumn: Column<Product>[] = [
    {
        key: "image",
        render: (u) => (
            <img src={u.image} alt="상품 대표 이미지" width={80} height={80} />
        ),
    },
    { key: "name", render: (u) => u.name },
    { key: "price", render: (u) => u.price },
    { key: "createdAt", render: (u) => u.createdAt },
    {
        key: "actions",
        render: (u) => (
            <button onClick={() => console.log(u.id)}>상세 확인</button>
        ),
    },
];

export default productColumn;
