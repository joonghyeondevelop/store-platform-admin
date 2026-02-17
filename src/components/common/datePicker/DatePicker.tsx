import "./datePicker.css";
import InputShell from "../InputShell/InputShell";
import { datePickerProps } from "./datePicker.type";
import { useRef } from "react";

const DatePicker = ({ title, items }: datePickerProps) => {
    const today = new Date().toISOString().substring(0, 10);
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className="datePicker">
            <div className="datePickerTitle">{title}</div>
            <div className="datePickerWrap">
                {items.map((item) => (
                    <InputShell>
                        <input
                            type="date"
                            min={today}
                            ref={ref}
                            onClick={(e) => {
                                const el = e.currentTarget as any;
                                if (typeof el.showPicker === "function") {
                                    el.showPicker();
                                }
                            }}
                        />
                    </InputShell>
                ))}
            </div>
        </div>
    );
};

export default DatePicker;
