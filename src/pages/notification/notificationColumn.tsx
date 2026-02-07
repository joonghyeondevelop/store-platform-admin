import { Column } from "../../components/table/DataTable/dataTable.type";
import { Notification } from "../../data/notification/notificationData.type";

export const notificationColum: Column<Notification>[] = [
    { key: "notificationActive", render: (u) => u.status },
    {
        key: "notificationImage",
        render: (u) => (
            <img src={u.imageUrl} alt="인앱 이미지" width={80} height={80} />
        ),
    },
    { key: "notificationTitle", render: (u) => u.title },
    {
        key: "notificationDate",
        render: (u) => (
            <>
                <span>{u.startAt} ~ </span>
                <span>{u.endAt}</span>
            </>
        ),
    },
    { key: "notificationManage", render: () => <button>상세 확인</button> },
];
