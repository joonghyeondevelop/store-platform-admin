import "./adminLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

const AdminLayout = () => {
    return (
        <div className="adminLayout">
            <Header />
            <div>
                <Sidebar />
                <main className="admin_content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
