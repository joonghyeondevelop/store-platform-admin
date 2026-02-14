import "./productListPage.css";
import TitleGroup from "../../components/layout/Title/titleGroup";
import DataTable from "../../components/table/DataTable/DataTable";
import { mockProducts } from "../../data/product/productData";
import productColumn from "./productColumn";
import { useModalContext } from "../../hooks/useModalContext";

const ProductListPage = () => {
    const modal = useModalContext();

    return (
        <div className="productListPage">
            <TitleGroup
                items={{ title: "상품 등록", subTitle: "주문 리스트" }}
                toolbar={{
                    element: "action",
                    actions: [
                        {
                            label: "상품 등록",
                            onClick: () => modal.onOpen("PRODUCT"),
                        },
                    ],
                }}
            />
            <DataTable
                rows={mockProducts}
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
