import "./title.css";
import { titleProps } from "./title.type";
import TitleBottom from "./titleBottom";
import TitleTop from "./titleTop";

const TitleGroup = ({ items }: titleProps) => {
    return (
        <div className="title">
            <TitleTop title={items.title} subTitle={items.subTitle} />
            <TitleBottom info="총 3명의 유저가 있습니다." />
        </div>
    );
};

export default TitleGroup;
