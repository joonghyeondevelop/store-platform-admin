import { useContext } from "react";
import { ModalContext } from "../components/layout/modal/ModalRoot";

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModalContext must be used within <ModalRoot />");
    }

    return context;
};
