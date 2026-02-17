import { sidebarGroupType } from "./sidebar.type";
import SidebarItem from "./SidebarItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SidebarGroup = ({ title, item, activePage, value }: sidebarGroupType) => {
    const values = Array.isArray(value) ? value : [value];
    const isGroupActive = values.includes(activePage);

    return (
        <div className="sidebarGroup">
            <div
                className={`sidebarHeader ${
                    isGroupActive ? "activeItemHeader" : ""
                }`}
            >
                <div>{title}</div>
                <div>
                    <ExpandMoreIcon />
                </div>
            </div>
            {item.map((item) => (
                <SidebarItem
                    key={item.label}
                    label={item.label}
                    onClick={item.onClick}
                    page={item.page}
                    activePage={activePage}
                />
            ))}
        </div>
    );
};

export default SidebarGroup;
