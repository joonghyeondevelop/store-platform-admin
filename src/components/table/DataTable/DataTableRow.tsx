import "./dataTable.css";
import { useSearchParams } from "react-router-dom";
import { DataGridProps } from "./dataTable.type";

const DataTableRow = <T extends { id: string | number }>({
    rows,
    columns,
    pageSize = 5,
}: DataGridProps<T>) => {
    const [searchParams] = useSearchParams();
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
                        "--cols": columns.length,
                        "--pageSize": pageSize,
                    } as React.CSSProperties
                }
            >
                {rows?.slice(startIndex, endIndex).map((row) => (
                    <div key={row.id} className="table_row">
                        {columns.map((col) => (
                            <div key={col.key}>{col.render(row)}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataTableRow;
