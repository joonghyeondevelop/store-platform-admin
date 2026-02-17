import "./modalAlarm.css";
import { useState } from "react";
import ModalInput from "../../../common/modalInput/ModalInput";

const ModalAlarm = () => {
    const [alarmTitle, setAlarmTitle] = useState<string>("");
    const [alarmContent, setAlarmContent] = useState("");

    return (
        <div className="modalAlarm">
            <ModalInput
                type="TITLE"
                value={alarmTitle}
                onChange={setAlarmTitle}
                placeholder="알림 제목을 입력해주세요"
                titleLimit={40}
            />
            <div className="alarmContent">
                <textarea
                    name="alarmContent"
                    placeholder="알림 내용을 입력해주세요"
                    value={alarmContent}
                    onChange={(e) => setAlarmContent(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ModalAlarm;
