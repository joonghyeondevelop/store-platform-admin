import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserListPage from "../pages/user/UserListPage";
import AdminLayout from "../components/layout/AdminLayout";
import ProductListPage from "../pages/product/ProductListPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route path="/" element={<Navigate to={"/users"} />} />
                    <Route path="/users" element={<UserListPage />} />
                    <Route path="/product" element={<ProductListPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
