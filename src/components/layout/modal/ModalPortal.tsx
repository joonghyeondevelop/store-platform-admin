import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type Props = {
    children: React.ReactNode;
};

const ModalPortal = ({ children }: Props) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const element = document.getElementById("root-modal");

    if (!element) return null;

    return ReactDOM.createPortal(children, element);
};

export default ModalPortal;
