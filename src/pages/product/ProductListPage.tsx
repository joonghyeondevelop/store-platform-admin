import "./productListPage.css";
import TitleGroup from "../../components/layout/Title/titleGroup";
import DataTable from "../../components/table/DataTable/DataTable";
import { Product } from "../../data/productData.type";
import { Column } from "../../components/table/DataTable/dataTable.type";
import { products } from "../../data/productData";

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

const ProductListPage = () => {
    return (
        <div className="userListPage">
            <TitleGroup
                items={{ title: "주문관리", subTitle: "주문 리스트" }}
            />
            <DataTable
                rows={products}
                columns={productColumn}
                headerItems={[
                    { label: "상품 대표 이미지" },
                    { label: "상품명" },
                    { label: "상품 가격" },
                    { label: "상품 생성일" },
                    { label: "상품 확인" },
                ]}
            />
        </div>
    );
};

export default ProductListPage;
