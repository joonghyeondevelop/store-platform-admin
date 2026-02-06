import "./userListPage.css";
import TitleGroup from "../../components/layout/Title/titleGroup";
import DataTable from "../../components/table/DataTable/DataTable";
import { Column } from "../../components/table/DataTable/dataTable.type";
import { User } from "../../data/userData.type";
import { mockUsers } from "../../data/userData";

const userColumns: Column<User>[] = [
    { key: "joinedAt", render: (u) => u.joinedAt },
    { key: "name", render: (u) => u.name },
    { key: "phone", render: (u) => u.phone },
    { key: "storeName", render: (u) => u.storeName },
    { key: "address", render: (u) => u.address },
    { key: "role", render: (u) => u.role },
];

const UserListPage = () => {
    return (
        <div className="userListPage">
            <TitleGroup
                items={{ title: "유저관리", subTitle: "일반 유저 관리" }}
                toolbar={{
                    element: "search",
                    value: "",
                    // onChange: (v) => setValue(v),
                    onChange: (v) => console.log(v),
                    placeholder: "검색",
                }}
            />
            <DataTable
                headerItems={[
                    { label: "가입일" },
                    { label: "성함" },
                    { label: "전화번호" },
                    { label: "상호명" },
                    { label: "업장 주소" },
                    { label: "유저 권한" },
                ]}
                rows={mockUsers}
                columns={userColumns}
            />
        </div>
    );
};

export default UserListPage;
