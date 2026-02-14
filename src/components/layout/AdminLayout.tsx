import "./adminLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import ModalPortal from "./modal/ModalPortal";
import ModalRoot from "./modal/ModalRoot";

const AdminLayout = () => {
    return (
        <div className="adminLayout">
            <Header />
            <div className="admin_body">
                <Sidebar />
                <main className="admin_content">
                    <Outlet />
                </main>
            </div>
            <ModalPortal>
                <ModalRoot />
            </ModalPortal>
        </div>
    );
};

export default AdminLayout;
