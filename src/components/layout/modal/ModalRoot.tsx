import Modal from "./Modal";
import { useModalContext } from "../../../hooks/useModalContext";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalProduct from "./product/ModalProduct";
import ModalCategory from "./category/ModalCategory";

const ModalRoot = () => {
    const { open, type, onClose } = useModalContext();

    if (!open || !type) return null;

    switch (type) {
        case "PRODUCT":
            return (
                <Modal
                    title={<ModalHeader title="상품 등록" />}
                    footer={<ModalFooter buttons={["등록하기"]} />}
                >
                    <ModalProduct
                        items={[
                            {
                                placeholder: "상품명",
                                type: "TITLE",
                                titleLimit: 30,
                            },
                            { placeholder: "상품 가격", type: "PRICE" },
                        ]}
                    />
                </Modal>
            );
        case "CATEGORY":
            return (
                <Modal
                    title={<ModalHeader title="카테고리 등록" />}
                    footer={<ModalFooter buttons={["등록하기"]} />}
                >
                    <ModalCategory />
                </Modal>
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
