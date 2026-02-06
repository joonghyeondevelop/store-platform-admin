import ListToolbar from "./listToolbar";
import { TitleToolbar } from "./title.type";

const TitleBottom = ({
    info,
    toolbar,
}: {
    info: string;
    toolbar: TitleToolbar;
}) => {
    return (
        <div className="title_bottom">
            <div>
                <div className="title_bottom_info">{info}</div>
                <div>
                    <ListToolbar toolbar={toolbar} />
                </div>
            </div>
        </div>
    );
};

export default TitleBottom;
