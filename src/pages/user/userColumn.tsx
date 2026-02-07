import { Column } from "../../components/table/DataTable/dataTable.type";
import { User } from "../../data/userData.type";

export const userColumns: Column<User>[] = [
    { key: "joinedAt", render: (u) => u.joinedAt },
    { key: "name", render: (u) => u.name },
    { key: "phone", render: (u) => u.phone },
    { key: "storeName", render: (u) => u.storeName },
    { key: "address", render: (u) => u.address },
    { key: "role", render: (u) => u.role },
];
