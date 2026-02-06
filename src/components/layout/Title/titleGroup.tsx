import "./title.css";
import { TitleProps } from "./title.type";
import TitleBottom from "./titleBottom";
import TitleTop from "./titleTop";

const TitleGroup = ({ items, toolbar }: TitleProps) => {
    return (
        <div className="title">
            <TitleTop title={items.title} subTitle={items.subTitle} />
            <TitleBottom info="총 3명의 유저가 있습니다." toolbar={toolbar} />
        </div>
    );
};

export default TitleGroup;
