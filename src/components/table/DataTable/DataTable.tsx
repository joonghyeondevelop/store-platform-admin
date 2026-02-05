import { useState } from "react";
import "./dataTable.css";
import { DataGridProps } from "./dataTable.type";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";
import Pagination from "../../common/pagination/Pagination";
import { useSearchParams } from "react-router-dom";

const DataTable = <T extends { id: string | number }>({
    headerItems,
    rows,
    columns,
}: DataGridProps<T>) => {
    const [users, setUsers] = useState<T[]>(rows);
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
                style={{ ["--cols" as any]: headerItems?.length }}
            >
                {headerItems?.map((item) => (
                    <DataTableHeader key={item.label} label={item.label} />
                ))}
            </div>
            <DataTableRow rows={rows} columns={columns} />
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
