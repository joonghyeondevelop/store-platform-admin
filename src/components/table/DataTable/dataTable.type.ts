import { Dispatch, SetStateAction } from "react";

export type dataTable = {
    items: dataTableHeader[];
};

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
