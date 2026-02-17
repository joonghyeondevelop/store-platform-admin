import Modal from "./Modal";
import { useModalContext } from "../../../hooks/useModalContext";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalProduct from "./product/ModalProduct";
import ModalCategory from "./category/ModalCategory";
import ModalNotification from "./notification/ModalNotification";
import ModalAlarm from "./alarm/ModalAlarm";

const ModalRoot = () => {
    const { open, type } = useModalContext();

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
        case "NOTIFICATION":
            return (
                <Modal
                    title={<ModalHeader title="공지 등록" />}
                    footer={<ModalFooter buttons={["등록하기"]} />}
                >
                    <ModalNotification />
                </Modal>
            );
        case "PUSH":
            return (
                <Modal
                    title={<ModalHeader title="알람 등록" />}
                    footer={<ModalFooter buttons={["등록하기"]} />}
                >
                    <ModalAlarm />
                </Modal>
            );
        default:
            return null;
    }
};

export default ModalRoot;
