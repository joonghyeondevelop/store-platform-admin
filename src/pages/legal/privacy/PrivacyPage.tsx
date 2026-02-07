import "./privacyPage.css";
import TitleGroup from "../../../components/layout/Title/titleGroup";
import LoadMarkdown from "../../../utils/loadMarkdown";

const PrivacyPage = () => {
    return (
        <div className="privacyPage">
            <TitleGroup
                items={{ title: "약관 관리", subTitle: "개인정보처리 방침" }}
                toolbar={{
                    element: "action",
                    actions: [
                        {
                            label: "약관 업데이트",
                            onClick: () => console.log("약관 업데이트 버튼"),
                        },
                    ],
                }}
            />
            <div className="privacyTable">
                <LoadMarkdown md="/legal/privacy.md" />
            </div>
        </div>
    );
};

export default PrivacyPage;
