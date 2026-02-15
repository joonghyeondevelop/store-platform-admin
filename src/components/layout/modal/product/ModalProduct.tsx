import "./modalProduct.css";
import { Items } from "../../../common/modalInput/ModalInput.type";
import ModalInput from "../../../common/modalInput/ModalInput";

type Props = {
    items: Items[];
};

const ModalProduct = ({ items }: Props) => {
    return (
        <div className="modalProductWrap">
            <div>
                <div>카테고리 선택 라인</div>
                <div>
                    {items.map((item) => (
                        <ModalInput
                            key={item.type}
                            placeholder={item.placeholder}
                            type={item.type}
                        />
                    ))}
                </div>
                <div className="productImage">
                    <div>상품 이미지</div>
                    <div className="productImageInput">
                        <span>
                            이미지 업로드 *규격25mb 이하 png,jpg 권장 사이즈:
                            800*600px
                        </span>
                        <span className="productImageUpload">
                            <button>업로드</button>
                        </span>
                    </div>
                </div>
                <div className="productDetail"></div>
            </div>
        </div>
    );
};

export default ModalProduct;
