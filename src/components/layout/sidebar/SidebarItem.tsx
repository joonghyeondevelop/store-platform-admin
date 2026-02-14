import "./sidebar.css";
import { sidebarItemProps } from "./sidebar.type";

const SidebarItem = ({
    label,
    onClick,
    page,
    activePage,
}: sidebarItemProps) => {
    return (
        <div
            onClick={onClick}
            className={`sidebarItem ${activePage === page ? "activeItem" : ""}`}
        >
            {label}
        </div>
    );
};

export default SidebarItem;
