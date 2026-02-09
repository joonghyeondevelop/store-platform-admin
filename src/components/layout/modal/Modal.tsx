type Props = {
    title: string;
    content: string;
    onClose: () => void;
};

const Modal = ({ title, content, onClose }: Props) => {
    return (
        <div>
            {title && <div>{title}</div>}
            {content && <div>{content}</div>}
            <div className="footer">
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

export default Modal;
