import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import SidebarGroup from "./SidebarGroup";

const Sidebar = () => {
    const nav = useNavigate();
    return (
        <div className="sidebar">
            <SidebarGroup
                title="유저관리"
                item={[
                    {
                        label: "일반 유저 관리",
                        onClick: () => nav("/users?page=1"),
                    },
                ]}
            />
            <SidebarGroup
                title="주문관리"
                item={[
                    {
                        label: "주문 리스트",
                        onClick: () => nav("/order?page=1"),
                    },
                ]}
            />
            <SidebarGroup
                title="상품 등록"
                item={[
                    {
                        label: "상품 리스트",
                        onClick: () => nav("/product?page=1"),
                    },
                ]}
            />
            <SidebarGroup
                title="카테고리 등록"
                item={[
                    {
                        label: "카테고리 리스트",
                        onClick: () => nav("/category?page=1"),
                    },
                ]}
            />
            <SidebarGroup
                title="공지 인앱 알림"
                item={[
                    {
                        label: "공지 리스트",
                        onClick: () => nav("/notification?page=1"),
                    },
                ]}
            />
            <SidebarGroup
                title="약관 관리"
                item={[
                    {
                        label: "서비스 이용약관",
                        onClick: () => nav("/legal/terms"),
                    },
                    {
                        label: "개인정보처리 방침",
                        onClick: () => nav("/legal/privacy"),
                    },
                ]}
            />
            <SidebarGroup
                title="푸시 알람"
                item={[
                    {
                        label: "알람 관리",
                        onClick: () => console.log("test"),
                    },
                ]}
            />
        </div>
    );
};

export default Sidebar;
