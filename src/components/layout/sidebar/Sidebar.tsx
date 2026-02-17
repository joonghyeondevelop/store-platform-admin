import "./sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarGroup from "./SidebarGroup";
import { useActivePage } from "../../../hooks/useActivePage";

const Sidebar = () => {
    const {
        acivePage,
        goUsers,
        goOrder,
        goProduct,
        goCategory,
        goNotification,
        goTerms,
        goPrivacy,
        goAlarm,
    } = useActivePage();
    return (
        <div className="sidebar">
            <SidebarGroup
                activePage={acivePage}
                value="USER"
                title="유저관리"
                item={[
                    {
                        label: "일반 유저 관리",
                        onClick: goUsers,
                        page: "USER",
                    },
                ]}
            />
            <SidebarGroup
                title="주문관리"
                value="ORDER"
                activePage={acivePage}
                item={[
                    {
                        label: "주문 리스트",
                        onClick: goOrder,
                        page: "ORDER",
                    },
                ]}
            />
            <SidebarGroup
                title="상품 등록"
                value="PRODUCT"
                activePage={acivePage}
                item={[
                    {
                        label: "상품 리스트",
                        onClick: goProduct,
                        page: "PRODUCT",
                    },
                ]}
            />
            <SidebarGroup
                title="카테고리 등록"
                value="CATEGORY"
                activePage={acivePage}
                item={[
                    {
                        label: "카테고리 리스트",
                        onClick: goCategory,
                        page: "CATEGORY",
                    },
                ]}
            />
            <SidebarGroup
                title="공지 인앱 알림"
                value="NOTIFICATION"
                activePage={acivePage}
                item={[
                    {
                        label: "공지 리스트",
                        onClick: goNotification,
                        page: "NOTIFICATION",
                    },
                ]}
            />
            <SidebarGroup
                title="약관 관리"
                value={["TERMS", "PRIVACY"]}
                activePage={acivePage}
                item={[
                    {
                        label: "서비스 이용약관",
                        onClick: goTerms,
                        page: "TERMS",
                    },
                    {
                        label: "개인정보처리 방침",
                        onClick: goPrivacy,
                        page: "PRIVACY",
                    },
                ]}
            />
            <SidebarGroup
                title="푸시 알람"
                value="ALARM"
                activePage={acivePage}
                item={[
                    {
                        label: "알람 관리",
                        onClick: goAlarm,
                        page: "ALARM",
                    },
                ]}
            />
        </div>
    );
};

export default Sidebar;
