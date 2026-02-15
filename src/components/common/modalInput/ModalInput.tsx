import { Items } from "./ModalInput.type";
import "./modalInput.css";
import { useEffect, useState } from "react";

const ModalInput = ({ placeholder, type }: Items) => {
    const [value, setValue] = useState<string>("");

    let valueLength;

    useEffect(() => {
        valueLength = value.length;
    }, [value]);

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
