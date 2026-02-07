import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserListPage from "../pages/user/UserListPage";
import AdminLayout from "../components/layout/AdminLayout";
import ProductListPage from "../pages/product/ProductListPage";
import OrderListPage from "../pages/order/OrderListPage";
import CategoryListPage from "../pages/category/CategoryListPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route path="/" element={<Navigate to={"/users"} />} />
                    <Route path="/users" element={<UserListPage />} />
                    <Route path="/product" element={<ProductListPage />} />
                    <Route path="/order" element={<OrderListPage />} />
                    <Route path="/category" element={<CategoryListPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
