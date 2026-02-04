import { sidebarGroupType } from "./sidebar.type";
import SidebarItem from "./SidebarItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SidebarGroup = ({ title, item }: sidebarGroupType) => {
    return (
        <div className="sidebarGroup">
            <div className="sidebarHeader">
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
                />
            ))}
        </div>
    );
};

export default SidebarGroup;
