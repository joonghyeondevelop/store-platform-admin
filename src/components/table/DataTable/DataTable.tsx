import { useEffect, useState } from "react";
import { mockUsers } from "../../../data/userData";
import { User } from "../../../data/userData.type";
import "./dataTable.css";
import { dataTable } from "./dataTable.type";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";
import Pagination from "../../common/pagination/Pagination";
import { useSearchParams } from "react-router-dom";

const DataTable = ({ items }: dataTable) => {
    const [users, setUsers] = useState<User[]>(mockUsers);
    const totalUsers = users.length;
    const [searchParams] = useSearchParams();
    const pageParam = searchParams.get("page");
    const currentPage = pageParam ? Math.max(1, Number(pageParam)) : 1;

    const pageSize = 5;
    const pageButtonCount = 5;
    const [start, setStart] = useState(1);

    // useEffect(() => {
    //     window.scrollTo(0, 0); // 페이지 이동 시 스크롤 위치 맨 위로 초기화
    // }, [pageParam]);

    return (
        <div className="dataTable">
            <div
                className="dataTable_header_row"
                style={{ ["--cols" as any]: items.length }}
            >
                {items.map((item) => (
                    <DataTableHeader label={item.label} />
                ))}
            </div>
            <DataTableRow />
            <div className="pagination_wrap">
                <Pagination
                    totalItems={totalUsers}
                    currentPage={currentPage}
                    pageCount={pageButtonCount}
                    itemCountPerPage={pageSize}
                    start={start}
                    setStart={setStart}
                />
            </div>
        </div>
    );
};

export default DataTable;
