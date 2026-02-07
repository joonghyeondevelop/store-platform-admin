import { Column } from "../../components/table/DataTable/dataTable.type";
import { Category } from "../../data/categoryData.type";
import UpArrow from "@mui/icons-material/ExpandLess";
import DownArrow from "@mui/icons-material/ExpandMore";

export const categoryColumn: Column<Category>[] = [
    {
        key: "idxMove",
        render: () => (
            <>
                <button>
                    <UpArrow />
                </button>
                <button>
                    <DownArrow />
                </button>
            </>
        ),
    },
    { key: "idx", render: (u) => u.id },
    { key: "categoryCreatedAt", render: (u) => u.categoryCreatedAt },
    { key: "categoryName", render: (u) => u.categoryName },
    { key: "caregoryManage", render: () => <button>상세 확인</button> },
];
