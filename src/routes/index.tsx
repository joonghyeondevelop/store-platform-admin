import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserListPage from "../pages/user/UserListPage";
import AdminLayout from "../components/layout/AdminLayout";
import ProductListPage from "../pages/product/ProductListPage";
import OrderListPage from "../pages/order/OrderListPage";
import CategoryListPage from "../pages/category/CategoryListPage";
import NotificationListPage from "../pages/notification/NotificationListPage";
import TermsPage from "../pages/legal/terms/TermsPage";
import PrivacyPage from "../pages/legal/privacy/PrivacyPage";
import AlarmListPage from "../pages/alarm/AlarmListPage";

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
                    <Route
                        path="/notification"
                        element={<NotificationListPage />}
                    />
                    <Route path="/legal/terms" element={<TermsPage />} />
                    <Route path="/legal/privacy" element={<PrivacyPage />} />
                    <Route path="/alarm" element={<AlarmListPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
