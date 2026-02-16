import "./modalInput.css";
import { Items } from "./ModalInput.type";
import { useEffect, useState } from "react";
// import Inko from "inko";

const ModalInput = ({ placeholder, type }: Items) => {
    const [value, setValue] = useState<string>("");

    let valueLength;

    useEffect(() => {
        valueLength = value.length;
    }, [value]);

    // const handleInput = (text: string) => {
    //     const isEnglish = (text: string) => /^[A-Za-z\s]+$/.test(text);
    //     if (() => isEnglish) {
    //         let inko = new Inko();
    //         return setValue(inko.en2ko(text));
    //     }

    //     return setValue(text);
    // };
    // 영어 -> 한글 변환 함수인데 단위를 쓸 방법이 없어져서 일단 보류

    return (
        <div className="inputStyle">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
            />
            {type === "TITLE" && (
                <div>
                    <span>{value.length}</span>
                    <span>&nbsp;30</span>
                </div>
            )}
        </div>
    );
};

export default ModalInput;
