import React, { createContext, useContext, useMemo, useState } from "react";
import { ModalContextValue } from "./modal.type";

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    const value = useMemo(
        () => ({
            open,
            onOpen: () => setOpen(true),
            onClose: () => setOpen(false),
        }),
        [open]
    );

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
}

export function useModalContext() {
    const ctx = useContext(ModalContext);
    if (!ctx)
        throw new Error("useModalContext must be used within ModalProvider");
    return ctx;
}
