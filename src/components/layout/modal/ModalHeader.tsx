import CloseIcon from "@mui/icons-material/Close";

type ModalHeader = {
    title: string;
};

const ModalHeader = ({ title }: ModalHeader) => {
    return (
        <div className="modalHeader">
            <div className="modalHeaderTitle">{title}</div>
            <div className="modalHeaderClose">
                <CloseIcon />
            </div>
        </div>
    );
};

export default ModalHeader;
