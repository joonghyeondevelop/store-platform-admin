import "./termsPage.css";
import TitleGroup from "../../../components/layout/Title/titleGroup";
import LoadMarkdown from "../../../utils/loadMarkdown";

const TermsPage = () => {
    return (
        <div className="termsPage">
            <TitleGroup
                items={{ title: "약관 관리", subTitle: "서비스 이용약관" }}
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
            <div className="termsTable">
                <LoadMarkdown md="/legal/terms.md" />
            </div>
        </div>
    );
};

export default TermsPage;
