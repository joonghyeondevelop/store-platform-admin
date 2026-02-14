import { createContext } from "react";
import { ModalContextValue } from "./modal.type";

export const ModalContext = createContext<ModalContextValue | null>(null);
