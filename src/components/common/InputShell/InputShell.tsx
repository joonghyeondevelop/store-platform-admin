import { inputShellProps } from "./inputShell.type";
import "../modalInput/modalInput.css";
const InputShell = ({ right, bottom, children }: inputShellProps) => {
    return (
        <div className="inputStyle">
            {children}
            {right && <div>{right}</div>}
            {bottom && <div>{bottom}</div>}
        </div>
    );
};

export default InputShell;
