import React, { useEffect } from "react";
import { ModalContext } from "./modalContext";
import { useToggle } from "../../../hooks/useToggle";
import { useLocation } from "react-router-dom";

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const value = useToggle();
    const location = useLocation();

    useEffect(() => {
        value.onClose();
    }, [location.pathname]);

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
}
