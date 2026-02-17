import { useState } from "react";
import ModalInput from "../../../common/modalInput/ModalInput";

const ModalCategory = () => {
    const [title, setTitle] = useState("");
    return (
        <div>
            <ModalInput
                placeholder={"카테고리 명"}
                type="TITLE"
                titleLimit={6}
                value={title}
                onChange={setTitle}
            />
        </div>
    );
};

export default ModalCategory;
