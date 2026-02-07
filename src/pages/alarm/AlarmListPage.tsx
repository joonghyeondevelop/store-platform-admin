import TitleGroup from "../../components/layout/Title/titleGroup";
import DataTable from "../../components/table/DataTable/DataTable";
import { mockAlarm } from "../../data/alarm/alarmData";
import { alarmColumn } from "./alarmColumn";

const AlarmListPage = () => {
    return (
        <div className="userListPage">
            <TitleGroup
                items={{ title: "푸시 알람", subTitle: "알람 관리" }}
                toolbar={{
                    element: "action",
                    actions: [
                        {
                            label: "알람 등록",
                            onClick: () => console.log("알람 버튼"),
                        },
                    ],
                }}
            />
            <DataTable
                headerItems={[
                    { label: "발송일" },
                    { label: "발송 시간" },
                    { label: "알람 제목" },
                    { label: "상세보기" },
                ]}
                rows={mockAlarm}
                columns={alarmColumn}
            />
        </div>
    );
};

export default AlarmListPage;
