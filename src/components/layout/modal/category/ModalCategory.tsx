import ModalInput from "../../../common/modalInput/ModalInput";

const ModalCategory = () => {
    return (
        <div>
            <ModalInput
                placeholder={"카테고리 명"}
                type="TITLE"
                titleLimit={6}
            />
        </div>
    );
};

export default ModalCategory;
