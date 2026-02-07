import "./orderListPage.css";
import TitleGroup from "../../components/layout/Title/titleGroup";
import DataTable from "../../components/table/DataTable/DataTable";
import { mockOrders } from "../../data/orderData";
import orderColumn from "./orderColumn";

const OrderListPage = () => {
    return (
        <div className="orderListPage">
            <TitleGroup
                items={{ title: "주문 관리", subTitle: "주문 리스트" }}
                toolbar={{
                    element: "statusFilter",
                    value: "전체",
                    onChange: (v) => console.log(v),
                    options: [{ label: "전체", value: "전체" }],
                }}
            />
            <DataTable
                rows={mockOrders}
                columns={orderColumn}
                headerItems={[
                    { label: "상품 정보" },
                    { label: "주문 시간" },
                    { label: "주문 금액" },
                    { label: "성함" },
                    { label: "수량" },
                    { label: "상호명" },
                    { label: "업장 주소" },
                    { label: "상태" },
                ]}
            />
        </div>
    );
};

export default OrderListPage;
