// import "./modalInput.css";
import InputShell from "../InputShell/InputShell";
import { ModalInputProps } from "./ModalInput.type";
import { formatNumber, stripNonDigits } from "../../../utils/modalUtils";

const ModalInput = ({
    type,
    placeholder,
    value,
    onChange,
    titleLimit = 30,
}: ModalInputProps) => {
    const displayValue =
        type === "PRICE" ? formatNumber(stripNonDigits(value)) : value;

    return (
        <InputShell
            right={type === "PRICE" ? <span>원</span> : undefined}
            bottom={
                type === "TITLE" ? (
                    <>
                        <span>{value.length}</span>
                        <span>&nbsp;{titleLimit}</span>
                    </>
                ) : undefined
            }
        >
            <input
                type="text"
                inputMode={type === "PRICE" ? "numeric" : undefined}
                value={displayValue}
                maxLength={type === "TITLE" ? titleLimit : 12}
                onChange={(e) => {
                    const next = e.target.value;

                    if (type === "PRICE") {
                        // 콤마 포함 문자열이 들어오므로 숫자만 추출해서 부모에 저장
                        onChange(stripNonDigits(next));
                        return;
                    }

                    onChange(next);
                }}
                placeholder={placeholder}
            />
        </InputShell>
    );
};

export default ModalInput;
