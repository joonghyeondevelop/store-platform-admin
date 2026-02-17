import "./modalProduct.css";
import React, { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import ModalInput from "../../../common/modalInput/ModalInput";
import UploadImageInput from "../../../common/uploadInput/UploadInput";
import { ModalItems } from "../../../common/modalInput/ModalInput.type";

type Props = {
    items: ModalItems[];
};

const ModalProduct = ({ items }: Props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [detail, setDetail] = useState("");

    const getValue = (type: ModalItems["type"]) =>
        type === "TITLE" ? title : price;
    const getSetter = (type: ModalItems["type"]) =>
        type === "TITLE" ? setTitle : setPrice;

    return (
        <div className="modalProductWrap">
            <div>
                <div className="modalBodyTop">
                    <div>카테고리 선택 라인</div>

                    <div>
                        {items.map((item) => (
                            <ModalInput
                                key={item.type}
                                type={item.type}
                                placeholder={item.placeholder}
                                titleLimit={item.titleLimit}
                                value={getValue(item.type)}
                                onChange={getSetter(item.type)}
                            />
                        ))}
                    </div>
                </div>

                <UploadImageInput />

                <div className="productDetail">
                    <div className="productDetailImageList">
                        <LaunchIcon />
                        <LaunchIcon />
                        <LaunchIcon />
                        <LaunchIcon />
                        <LaunchIcon />
                    </div>

                    <div className="productDetailTextArea">
                        <textarea
                            name="productDetailTextArea"
                            placeholder="제품 상세 설명"
                            value={detail}
                            onChange={(e) => setDetail(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalProduct;
