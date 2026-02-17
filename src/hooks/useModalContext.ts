import { useContext } from "react";
import { ModalContext } from "../components/layout/modal/modalContext";

export function useModalContext() {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("ModalProvider로 감싸져 있지 않습니다.");
    return ctx;
}
