import "./adminLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import ModalPortal from "./modal/ModalPortal";
import { ModalTrigger } from "./modal/ModalTrigger";

const AdminLayout = () => {
    return (
        <div className="adminLayout">
            <ModalTrigger>클릭</ModalTrigger>
            <Header />
            <ModalPortal>
                <div className="admin_body">
                    <Sidebar />
                    <main className="admin_content">
                        <Outlet />
                    </main>
                </div>
            </ModalPortal>
        </div>
    );
};

export default AdminLayout;
