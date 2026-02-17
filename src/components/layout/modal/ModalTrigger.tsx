import { useModalContext } from "../../../hooks/useModalContext";
import { ModalType } from "./modal.type";

type ModalTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    modalType: ModalType;
};

export function ModalTrigger({
    modalType,
    children,
    ...rest
}: ModalTriggerProps) {
    const context = useModalContext();

    const onToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        rest.onClick?.(event);

        if (context.open && context.type === modalType) {
            context.onClose();
        } else {
            context.onOpen(modalType);
        }
    };
    return (
        <button type="button" onClick={onToggle} {...rest}>
            {children}
        </button>
    );
}
