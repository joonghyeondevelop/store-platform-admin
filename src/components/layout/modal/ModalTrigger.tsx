import { useModalContext } from "../../../hooks/useModalContext";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ModalTrigger(props: Props) {
    const { children, ...rest } = props;
    const context = useModalContext();

    const onToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick?.(event);
        (context.open ? context.onClose : context.onOpen)();
    };

    return (
        <button type="button" onClick={onToggle} {...rest}>
            {children}
        </button>
    );
}
