import "./sidebar.css";
import { sidebarItemType } from "./sidebar.type";

const SidebarItem = ({ label, onClick }: sidebarItemType) => {
    return (
        <div onClick={onClick} className="sidebarItem">
            {label}
        </div>
    );
};

export default SidebarItem;
