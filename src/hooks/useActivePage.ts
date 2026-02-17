import { useLocation, useNavigate } from "react-router-dom";
import { Page } from "../components/layout/sidebar/sidebar.type";

const getActivePageFromPath = (path: string): Page => {
    if (path.startsWith("/users")) return "USER";
    if (path.startsWith("/order")) return "ORDER";
    if (path.startsWith("/product")) return "PRODUCT";
    if (path.startsWith("/category")) return "CATEGORY";
    if (path.startsWith("/notification")) return "NOTIFICATION";
    if (path.startsWith("/legal/terms")) return "TERMS";
    if (path.startsWith("/legal/privacy")) return "PRIVACY";
    if (path.startsWith("/alarm")) return "ALARM";

    return "USER";
};

export const useActivePage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const acivePage = getActivePageFromPath(location.pathname);

    return {
        acivePage,
        goUsers: () => navigate("/users?page=1"),
        goOrder: () => navigate("/order?page=1"),
        goProduct: () => navigate("/product?page=1"),
        goCategory: () => navigate("/category?page=1"),
        goNotification: () => navigate("/notification?page=1"),
        goTerms: () => navigate("/legal/terms"),
        goPrivacy: () => navigate("/legal/privacy"),
        goAlarm: () => navigate("/alarm?page=1"),
    };
};
