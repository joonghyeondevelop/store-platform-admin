import CloseIcon from "@mui/icons-material/Close";
import { useModalContext } from "../../../hooks/useModalContext";

type ModalHeader = {
    title: string;
};

const ModalHeader = ({ title }: ModalHeader) => {
    const { onClose } = useModalContext();
    return (
        <div className="modalHeader">
            <div className="modalHeaderTitle">{title}</div>
            <div className="modalHeaderClose">
                <CloseIcon onClick={onClose} />
            </div>
        </div>
    );
};

export default ModalHeader;
