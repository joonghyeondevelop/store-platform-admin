import { Column } from "../../components/table/DataTable/dataTable.type";
import { Order } from "../../data/order/orderData.type";

const orderColumn: Column<Order>[] = [
    {
        key: "productInfo",
        render: (u) => u.productInfo.name,
    },
    { key: "orderTime", render: (u) => u.orderTime },
    { key: "orderPrice", render: (u) => u.orderPrice },
    { key: "userName", render: (u) => u.userName },
    { key: "quantity", render: (u) => u.quantity },
    { key: "storeName", render: (u) => u.storeName },
    { key: "storeAddress", render: (u) => u.storeAddress },
    {
        key: "actions",
        render: (u) => (
            <button onClick={() => console.log(u.id)}>{u.orderStatus}</button>
        ),
    },
];

export default orderColumn;
