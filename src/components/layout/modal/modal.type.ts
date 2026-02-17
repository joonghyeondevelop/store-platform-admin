export type ModalContextValue = {
    open: boolean;
    onOpen: (t: ModalType) => void;
    onClose: () => void;
    type: ModalType;
};

export type ModalType = "PRODUCT" | "CATEGORY" | "NOTIFICATION" | "PUSH" | null;
