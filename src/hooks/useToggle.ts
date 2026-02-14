import { useCallback, useMemo, useState } from "react";
import {
    ModalContextValue,
    ModalType,
} from "../components/layout/modal/modal.type";

export const useToggle = (): ModalContextValue => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<ModalType | null>(null);

    const onOpen = useCallback((t: ModalType) => {
        setType(t);
        setOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setOpen(false);
        setType(null);
    }, []);

    return { open, onOpen, onClose, type };
};
