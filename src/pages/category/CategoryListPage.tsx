import "./categoryListPage.css";
import TitleGroup from "../../components/layout/Title/titleGroup";
import DataTable from "../../components/table/DataTable/DataTable";
import { mockCategory } from "../../data/category/categoryData";
import { categoryColumn } from "./categoryColumn";
import { useModalContext } from "../../hooks/useModalContext";

const CategoryListPage = () => {
    const modal = useModalContext();
    return (
        <div className="categoryListPage">
            <TitleGroup
                items={{ title: "카테고리 등록", subTitle: "카테고리 리스트" }}
                toolbar={{
                    element: "action",
                    actions: [
                        {
                            label: "등록하기",
                            onClick: () => modal.onOpen("CATEGORY"),
                        },
                    ],
                }}
            />
            <DataTable
                rows={mockCategory}
                columns={categoryColumn}
                headerItems={[
                    { label: "순서이동" },
                    { label: "순서" },
                    { label: "카테고리 생성일" },
                    { label: "카테고리 명" },
                    { label: "관리" },
                ]}
            />
        </div>
    );
};

export default CategoryListPage;
