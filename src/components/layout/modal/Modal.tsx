import React from "react";
import "./modal.css";

type Props = {
    title: React.ReactNode;
    children: React.ReactNode;
    footer: React.ReactNode;
};

const Modal = ({ title, children, footer }: Props) => {
    return (
        <div className="modalBackground">
            <div className="modal">
                <div className="modalWrap">
                    {title}
                    {children}
                    {footer}
                </div>
            </div>
        </div>
    );
};

export default Modal;
