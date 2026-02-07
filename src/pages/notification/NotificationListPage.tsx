import "./notificationListPage.css";
import TitleGroup from "../../components/layout/Title/titleGroup";
import DataTable from "../../components/table/DataTable/DataTable";
import { mockNotifications } from "../../data/notification/notificationData";
import { notificationColum } from "./notificationColumn";

const NotificationListPage = () => {
    return (
        <div className="notificationListPage">
            <TitleGroup
                items={{ title: "공지 인앱 알림", subTitle: "공지 리스트" }}
                toolbar={{
                    element: "action",
                    actions: [
                        {
                            label: "등록하기",
                            onClick: () => console.log("공지 인앱 등록"),
                        },
                    ],
                }}
            />
            <DataTable
                rows={mockNotifications}
                columns={notificationColum}
                headerItems={[
                    { label: "노출중" },
                    { label: "노출 형태" },
                    { label: "제목" },
                    { label: "기간" },
                    { label: "관리" },
                ]}
            />
        </div>
    );
};

export default NotificationListPage;
