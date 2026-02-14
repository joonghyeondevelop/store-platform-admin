import "./modal.css";

type Props = {
    title: string;
    content: string;
    onClose: () => void;
};

const Modal = ({ title, content, onClose }: Props) => {
    return (
        <div className="modal_background">
            <div className="modal">
                {title && <div>{title}</div>} {/* 버튼 이름 + x 버튼 */}
                {content && <div>{content}</div>} {/* 페이지마다 들어갈 것 */}
                <div className="footer">
                    <button onClick={onClose}>닫기</button>{" "}
                    {/* 등록하기 버튼을 닫기 + 업로드로 */}
                </div>
            </div>
        </div>
    );
};

export default Modal;
