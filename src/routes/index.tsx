import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
