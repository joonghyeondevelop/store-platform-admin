import { PropsWithChildren, createContext, useCallback, useState } from "react";
import { useToggle } from "../../../hooks/useToggle";
import { ModalContextValue } from "./modal.type";

export const ModalContext = createContext<ModalContextValue | null>(null);

const ModalRoot = ({ children }: PropsWithChildren) => {
    const toggle = useToggle(); // { open, onOpen, onClose } 형태라고 가정
    return (
        <ModalContext.Provider value={toggle}>{children}</ModalContext.Provider>
    );
};

export default ModalRoot;
