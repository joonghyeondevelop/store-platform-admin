import { renderToolbar } from "./ToolbarRenderer";
import "./title.css";
import { TitleToolbar } from "./title.type";

type Props = { toolbar: TitleToolbar };

const ListToolbar = ({ toolbar }: Props) => {
    return (
        <div className="list_toolbar">
            <div className="toolbar_left">{renderToolbar(toolbar)}</div>
        </div>
    );
};

export default ListToolbar;
