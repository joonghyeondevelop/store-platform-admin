import "./dataTable.css";
import { useSearchParams } from "react-router-dom";
import { mockUsers } from "../../../data/userData";
import Pagination from "../../common/pagination/Pagination";
import { User } from "../../../data/userData.type";
import { useEffect, useState } from "react";

const DataTableRow = () => {
    const [users, setUsers] = useState<User[]>(mockUsers);
    const [searchParams] = useSearchParams();
    const pageSize = 5;
    const pageParam = searchParams.get("page");
    const currentPage = pageParam ? Math.max(1, Number(pageParam)) : 1;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return (
        <div className="table">
            <div
                className="table_body"
                style={
                    {
                        "--cols": 6,
                        "--pageSize": pageSize,
                    } as React.CSSProperties
                }
            >
                {users?.slice(startIndex, endIndex).map((user) => (
                    <div key={user.id} className="table_row">
                        <div>{user.joinedAt}</div>
                        <div>{user.name}</div>
                        <div>{user.phone}</div>
                        <div>{user.storeName}</div>
                        <div>{user.address}</div>
                        <div>{user.role}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataTableRow;
