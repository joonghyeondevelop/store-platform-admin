import "./dataTable.css";
import { dataTableHeader } from "./dataTable.type";

const DataTableHeader = ({ label }: dataTableHeader) => {
    return <div className="table_header_row">{label}</div>;
};

export default DataTableHeader;
