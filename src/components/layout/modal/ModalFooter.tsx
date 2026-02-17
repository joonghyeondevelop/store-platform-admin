import React from "react";

type Prop = {
    buttons: string[];
};

const ModalFooter = ({ buttons }: Prop) => {
    return (
        <div className="footer">
            {buttons.map((item: string) => (
                <button className="footerButton">{item}</button>
            ))}
        </div>
    );
};

export default ModalFooter;
