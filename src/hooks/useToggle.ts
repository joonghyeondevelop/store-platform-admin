import { useCallback, useState } from "react";
import { ModalContextType } from "../components/layout/modal/modal.type";

export const useToggle = (): ModalContextType => {
    const [open, setOpen] = useState<boolean>(false);

    const onOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setOpen(false);
    }, []);

    return { open, onOpen, onClose };
};
