import { Column } from "../../components/table/DataTable/dataTable.type";
import { Alarm } from "../../data/alarm/alarmData.type";

export const alarmColumn: Column<Alarm>[] = [
    {
        key: "sendDate",
        render: (u) => u.sendDate,
    },
    {
        key: "sendTime",
        render: (u) => u.sendTime,
    },
    {
        key: "title",
        render: (u) => u.title,
    },
    {
        key: "alarmManage",
        render: (u) => <button>상세 확인</button>,
    },
];
