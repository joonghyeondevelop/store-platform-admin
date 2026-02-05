import ListToolbar from "./listToolbar";
import { ListToolbarProps } from "./title.type";

const TitleBottom = ({
    info,
}: // type,
{
    info: string;
    // type: ListToolbarProps;
}) => {
    return (
        <div className="title_bottom">
            <div>
                <div className="title_bottom_info">{info}</div>
                <div>
                    <ListToolbar />
                </div>
            </div>
        </div>
    );
};

export default TitleBottom;
