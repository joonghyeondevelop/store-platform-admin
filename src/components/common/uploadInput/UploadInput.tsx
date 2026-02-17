import "./uploadInput.css";

const UploadImageInput = () => {
    return (
        <div className="productImage">
            <div>상품 이미지</div>
            <div className="productImageInput">
                <span>
                    이미지 업로드 *규격25mb 이하 png,jpg 권장 사이즈: 800*600px
                </span>
                <span className="productImageUpload">
                    <button>업로드</button>
                </span>
            </div>
        </div>
    );
};

export default UploadImageInput;
