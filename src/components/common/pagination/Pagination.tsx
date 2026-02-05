import { useEffect, useState } from "react";
import styles from "./pagination.module.css";
import { Link } from "react-router-dom";
import { dataProps } from "../../table/DataTable/dataTable.type";

const Pagination = ({
    totalItems,
    itemCountPerPage,
    pageCount,
    currentPage,
    start,
    setStart,
}: dataProps) => {
    const totalPages = Math.ceil(totalItems / itemCountPerPage); // 총 페이지 개수
    const noPrev = start === 1;
    const noNext = start + pageCount - 1 >= totalPages;

    useEffect(() => {
        if (currentPage === start + pageCount)
            setStart((prev) => prev + pageCount);
        if (currentPage < start) setStart((prev) => prev - pageCount);
    }, [currentPage, pageCount, start]);
    return (
        <div className={styles.wrapper}>
            <ul>
                <li className={`${styles.move} ${noPrev && styles.invisible}`}>
                    <Link to={`?page=${start - 1}`}>이전</Link>
                </li>
                {[...Array(pageCount)].map((_, i) => {
                    const page = start + i;

                    if (page > totalPages) return null;

                    return (
                        <li key={page}>
                            <Link
                                className={`${styles.page} ${
                                    currentPage === page && styles.active
                                }`}
                                to={`?page=${page}`}
                            >
                                {page}
                            </Link>
                        </li>
                    );
                })}
                <li className={`${styles.move} ${noNext && styles.invisible}`}>
                    <Link to={`?page=${start + pageCount}`}>다음</Link>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
