import "./modalNotification.css";
import { useState } from "react";
import ModalInput from "../../../common/modalInput/ModalInput";
import UploadImageInput from "../../../common/uploadInput/UploadInput";
import DatePicker from "../../../common/datePicker/DatePicker";

const ModalNotification = () => {
    const [title, setTitle] = useState("");

    return (
        <div className="modalNotification">
            <div className="modalNotificationTop">
                <ModalInput
                    placeholder="공지 제목"
                    type="TITLE"
                    titleLimit={30}
                    value={title}
                    onChange={setTitle}
                />
                <UploadImageInput />
                {/* 이미지 업로드한 이미지는 여기로 리스트로 쌓임 */}
            </div>
            <DatePicker
                title="노출 기간"
                items={[
                    { placeholder: "yyyy - mm - dd" },
                    { placeholder: "yyyy - mm - dd" },
                ]}
            />
        </div>
    );
};

export default ModalNotification;
