import { titleTopProps } from "./title.type";

const TitleTop = ({ title, subTitle }: titleTopProps) => {
    return (
        <div className="header">
            <div className="header_title">{title}</div>
            <div className="header_subTitle">{subTitle}</div>
        </div>
    );
};

export default TitleTop;
