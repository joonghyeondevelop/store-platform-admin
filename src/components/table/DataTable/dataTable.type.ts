import { Dispatch, SetStateAction } from "react";

export type Column<T> = {
    key: string;
    header?: string;
    width?: string;
    render: (row: T) => React.ReactNode;
};

export type DataGridProps<T> = {
    headerItems?: dataTableHeader[];
    rows: T[];
    columns: Column<T>[];
    pageSize?: number;
};

export type dataTable = {};

export type dataTableHeader = {
    label: string;
};

export type dataProps = {
    totalItems: number; // 데이터의 총 개수
    itemCountPerPage: number; // 페이지 당 보여줄 데이터 개수
    pageCount: number; // 보여줄 페이지 개수
    currentPage: number; // 현재 페이지
    start: number;
    setStart: Dispatch<SetStateAction<number>>;
};
