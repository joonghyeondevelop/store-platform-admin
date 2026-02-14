import Modal from "./Modal";
import { useModalContext } from "../../../hooks/useModalContext";

const ModalRoot = () => {
    const { open, type, onClose } = useModalContext();

    if (!open || !type) return null;

    switch (type) {
        case "PRODUCT":
            return (
                <Modal title={"상품"} content={"콘텐츠"} onClose={onClose} />
            );
        case "CATEGORY":
            return (
                <Modal
                    title={"카테고리"}
                    content={"콘텐츠"}
                    onClose={onClose}
                />
            );
        case "NOTICE":
        // return <NoticeModal onClose={onClose} />;
        case "PUSH":
        // return <PushModal onClose={onClose} />;
        default:
            return null;
    }
};

export default ModalRoot;
