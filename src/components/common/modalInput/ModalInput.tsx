import "./modalInput.css";
import { Items } from "./ModalInput.type";
import { useEffect, useState } from "react";
// import Inko from "inko";

const ModalInput = ({ placeholder, type, titleLimit }: Items) => {
    const [title, setTitle] = useState<string>("");
    const [priceValue, setPriceValue] = useState<string>("");
    const [priceDisPlay, setPriceDisPlay] = useState<string>("");

    let valueLength;

    useEffect(() => {
        valueLength = title.length;
    }, [title]);

    const formatNumber = (value: string) => {
        if (!value) return "";
        return Number(value).toLocaleString("ko-KR");
    };

    const handlePrice = (text: string) => {
        const digits = text.replace(/[^\d]/g, ""); // 숫자만
        setPriceValue(digits);
        setPriceDisPlay(formatNumber(digits));
    };

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
                value={type === "TITLE" ? title : priceDisPlay}
                maxLength={type === "TITLE" ? titleLimit : 12}
                onChange={(e) => {
                    type === "TITLE"
                        ? setTitle(e.target.value)
                        : handlePrice(e.target.value);
                }}
                placeholder={placeholder}
            />
            {type === "TITLE" && (
                <div>
                    <span>{title.length}</span>
                    <span>&nbsp;{titleLimit}</span>
                </div>
            )}
            {type === "PRICE" && (
                <div>
                    <span>원</span>
                </div>
            )}
        </div>
    );
};

export default ModalInput;
