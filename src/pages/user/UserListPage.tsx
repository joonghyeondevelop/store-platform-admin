import "./userListPage.css";
import TitleGroup from "../../components/layout/Title/titleGroup";
import DataTable from "../../components/table/DataTable/DataTable";
import { mockUsers } from "../../data/user/userData";
import { userColumns } from "./userColumn";

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
